import rpi_jsy from 'rollup-plugin-jsy'
import rpi_resolve from 'rollup-plugin-jsy'

const configs = []
export default configs

const sourcemap = true
const external = ['dgram', 'path']
const plugins = [rpi_jsy(), rpi_resolve()]

//import rpi_test from './esm/index.mjs'
//plugins.push(rpi_test())

add_jsy('index')


function add_jsy(src_name) {
  configs.push({
    input: `code/${src_name}.jsy`, plugins, external,
    output: [
      { file: `esm/${src_name}.mjs`, format: 'es', sourcemap },
      { file: `cjs/${src_name}.cjs`, format: 'cjs', exports:'default', sourcemap },
    ]}) }
