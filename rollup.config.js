import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import { babel } from '@rollup/plugin-babel'
import { main, module, jsdelivr } from './package.json'

const production = !process.env.ROLLUP_WATCH
const name = 'px'

const plugins = [
  !production && serve({ port: 6870, host: '127.0.0.1', contentBase: ['dist', 'public'] }),
  !production && livereload(),
  production && del({ targets: 'dist/*' }),
  babel({ babelHelpers: 'bundled', presets: ['@babel/preset-env'] }),
  copy({
    targets: [{ src: 'src/1px.*', dest: 'dist' }]
  })
]

export default {
  input: 'src/index.js',
  plugins,
  output: [
    {
      name,
      format: 'iife',
      file: jsdelivr,
      plugins: [production && terser()]
    },
    {
      format: 'esm',
      file: module
    },
    {
      exports: 'auto',
      format: 'cjs',
      file: main
    }
  ],
  watch: {
    clearScreen: false
  }
}
