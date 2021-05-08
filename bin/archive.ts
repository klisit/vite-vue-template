const { readdirSync, statSync, createWriteStream } = require('fs')
const { exec } = require('child_process')
const { join } = require('path')
const { loadEnv } = require('vite')
const tar = require('tar')
let env = loadEnv('production', process.cwd())
const pack = new tar.Pack({ gzip: true })

let arg: Array<any> = process.argv.splice(2)

if (arg.shift() == 'start') {
  readDirSync('./', 'base')
  pack.end()
  const writeStream = createWriteStream(`${env.VITE_APP_NAME} ${env.VITE_APP_VERSION}.tar.gz`)
  pack.pipe(writeStream)
} else {
  exec('cd dist && ts-node ../bin/archive.ts start', (error: string | null) => {
    if (error) {
      console.log(error)
    }
  })
}

function readDirSync(path: string, base: string) {
  if (base == undefined) {
    base = path
  }
  const pa = readdirSync(path)
  pa.forEach((ele: string) => {
    var info = statSync(join(path, ele))
    if (info.isDirectory()) {
      readDirSync(join(path, ele), join(base, ele))
    } else {
      pack.add(join(path, ele))
    }
  })
}
