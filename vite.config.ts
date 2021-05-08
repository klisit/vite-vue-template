import { loadEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { version } from './bin/version'

/**
 * @type {import('vite').UserConfig}
 */
// https://vitejs.dev/config/
export default async ({ command, mode }) => {
  if (command == 'build') {
    console.log(mode)

    let env = loadEnv(mode, process.cwd())
    await version(env.VITE_APP_VERSION)
  }

  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
      },
    },
    base: './', // 设置打包路径
    server: {
      port: 4396, // 设置服务启动端口号
      open: true, // 设置服务启动时是否自动打开浏览器
      cors: true, // 允许跨域

      // 设置代理，根据我们项目实际情况配置
      // proxy: {
      //   '/api': {
      //     target: 'http://xxx.xxx.xxx:8000',
      //     changeOrigin: true,
      //     secure: false,
      //     rewrite: (path) => path.replace('/api/', '/')
      //   }
      // }
    },
  })
}
