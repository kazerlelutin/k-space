const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

function build() {
  console.log('🦺 Construction')

  exec('npm run build:css', (err, _stdout, stderr) => {
    if (err)
      return console.error(
        `Erreur lors de la compilation des fichiers CSS: ${err}`
      )

    if (stderr) return console.error(`Erreur de Sass : ${stderr}`)

    console.log('📏 CSS minifié')
  })

  const dirPath = path.join(process.cwd(), 'src', 'scripts')

  const minifyFile = (file) => {
    const filePath = path.join(dirPath, file)
    const outputFilePath = path.join(
      process.cwd(),
      'src',
      'public',
      'js',
      file.replace('.js', '.min.js')
    )
    exec(
      `terser ${filePath} -o ${outputFilePath} --compress --mangle`,
      (err, _stdout, stderr) => {
        if (err)
          return console.error(
            `Erreur lors de la minification de ${file}: ${err}`
          )

        if (stderr) return console.error(`Erreur de Terser : ${stderr}`)
      }
    )
  }
  console.log('✂️', 'Minification des fichiers JS en cours...')

  fs.readdir(dirPath, (err, files) => {
    if (err)
      return console.error(`Erreur lors de la lecture du répertoire : ${err}`)

    files.filter((file) => file.endsWith('.js')).forEach(minifyFile)
  })
  console.log('✂️', 'Minification des fichiers JS terminée')

  return true
}
module.exports = {
  build,
}
