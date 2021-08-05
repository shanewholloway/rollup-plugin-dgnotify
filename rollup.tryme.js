import rpi_dgnotify from './esm/index.mjs'

export default {
  input: `_tryme_.js`,
  output: {dir: './oow'},
  plugins: [
    rpi_dgnotify({
      echo: true
    }),
  ]
}
