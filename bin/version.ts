import readline from 'readline'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { exec } from 'child_process'

export function version(oldVer) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  return new Promise((resolve, reject) => {
    rl.question(`当前版本为${oldVer},请输入新版本(不填默认当前版本) \n`, (ver) => {
      let chip = ver.split('.')
      if (ver == '') {
        logo(oldVer)
      } else if (chip.length <= 2) {
        console.clear()
        console.log('\x1B[31m 输入参数格式不正确> %s <\x1B[0m', ver)
        rl.close()
        reject()
        process.exit(1)
      } else {
        const packagePath = join(__dirname, '..', 'package.json')
        const envPath = join(__dirname, '..', '.env')
        let appString = readFileSync(packagePath).toString()
        let envString = readFileSync(envPath).toString()
        let app = JSON.parse(appString)

        app.version = ver
        envString = envString.replace(oldVer, ver)

        const appBuffer = Buffer.from(JSON.stringify(app), 'utf8')
        const envBuffer = Buffer.from(envString, 'utf8')
        writeFileSync(packagePath, appBuffer)
        writeFileSync(envPath, envBuffer)

        exec(`yarn prettier --write ${packagePath}`)
        console.clear()
        console.log('\x1B[33m修改版本为\x1B[90m %s \x1B[37m------>\x1B[32m %s \x1B[0m', oldVer, ver)
        logo(ver)
      }

      rl.close()
      resolve(1)
    })
  })

  function logo(ver) {
    console.log(
      '\x1B[0;31m      ___            ___            ___      __________      ___      __________\n     /  /|          /  /|          /  /|    /  _______/|    /  /|    /___   ___/|\n    /  / /         /  / /         /  / /   /  /______ |/   /  / /    |__/  /|__|/\n   /  /_/____     /  / /         /  / /   /______   /|    /  / /       /  / /\n  /     ____/|   /  / /         /  / /    |_____/  / /   /  / /       /  / /\n /  /\\  \\___|/  /  /_/____     /  / /   _______/  / /   /  / /       /  / /\n/__/ |\\__\\     /_________/|   /__/ /   /_________/ /   /__/ /       /__/ /\n|__|/ \\|__|    |_________|/   |__|/    |_________|/    |__|/        |__|/   \x1B[0;37m version: %s\n \x1B[0m',
      ver
    )
  }
}
