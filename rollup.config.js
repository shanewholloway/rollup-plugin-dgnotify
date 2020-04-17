import pkg from './package.json'
import rpi_jsy from 'rollup-plugin-jsy'
import rpi_resolve from '@rollup/plugin-node-resolve'

const _cfg_ = {
  external: ['dgram', 'path', 'fs', 'https', 'http', 'os'],
  plugins: [
    rpi_jsy(),
    rpi_resolve(),
  ]}

export default [
  { ..._cfg_,
    input: `code/index.jsy`,
    output: [
      { file: pkg.module, format: 'es', sourcemap: true },
      { file: pkg.main, format: 'cjs', exports:'default', sourcemap: true },
    ]},

  { ..._cfg_,
    input: `code/dgn_relay.jsy`,
    output: { file: 'cjs/dgn_relay.cjs', format: 'cjs', exports:'default', sourcemap: true }
    },
]

