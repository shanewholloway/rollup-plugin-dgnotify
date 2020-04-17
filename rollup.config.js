import pkg from './package.json'
import rpi_jsy from 'rollup-plugin-jsy'

export default {
  input: `code/index.jsy`,
  plugins: [rpi_jsy()],
  external: ['dgram', 'path'],
  output: [
    { file: pkg.module, format: 'es', sourcemap: true },
    { file: pkg.main, format: 'cjs', exports:'default', sourcemap: true },
  ]}

