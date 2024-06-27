import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import dtsPlugin from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['echarts/core', 'lodash', 'dayjs', 'lodash-es', 'vue'],
      output: [
        {
          format: 'es',
          dir: './dist/es',
          entryFileNames: '[name].js',
          preserveModulesRoot: './packages',
          preserveModules: true
        },
        {
          format: 'cjs',
          dir: './dist/lib',
          entryFileNames: '[name].js',
          preserveModulesRoot: './packages',
          preserveModules: true,
          exports: 'named'
        }
      ]
    },
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'ksg-echarts',
      formats: ['es', 'cjs']
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    dtsPlugin({
      outDir: ['dist/es', 'dist/lib'],
      include: ['packages/**/*.ts'],
      insertTypesEntry: true,
      staticImport: true,
      exclude: ['node_modules/@ksg/components/**']
    })
  ]
});
