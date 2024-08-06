
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueJsx from "@vitejs/plugin-vue-jsx"

/* 当前文件路径索引 */
const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve('packages')
      },
      {
        find: 'PAGE-COMPONENTS',
        replacement: resolve('packages/components')
      },
      {
        find: 'TYPES',
        replacement: resolve('types')
      },
      {
        find: 'VIEW',
        replacement: resolve('examples/src/page')
      },
      {
        find: 'COMPONENTS',
        replacement: resolve('examples/src/components')
      }
    ]
  },
  build: {
    outDir: "lib",
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'), //指编译入口文件
      name: 'PcBusiness',
      fileName:'pc-business'
    },
    rollupOptions: {
      // 不想打进库的包
      external: ['vue'],
      output: {
        globals: {
          vue:'Vue'
        }
      }
    }
  },
  server: {
    host: '0.0.0.0',
    open:true
  }
})
