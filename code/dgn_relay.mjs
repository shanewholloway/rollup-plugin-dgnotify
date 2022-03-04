import {qsdg_server} from 'qsdg'

export default async function dgn_relay_main() {
  let opt = { port: 8098, dg_relay: [8099] }
  let dg_listen_addr = process.env.DGNOTIFY
  if (dg_listen_addr) {
    opt.dg_listen_addr = dg_listen_addr
    console.log('Using:', opt)
  }

  await qsdg_server(opt)

  console.log(`
    rpi_dgnotify:
      event source:
        http://127.0.0.1:8098/dg_relay?8099

      web watcher:
        https://shanewholloway.github.io/rollup-plugin-dgnotify/index.html?q=${Date.now().toString(36)}
    `)
}
