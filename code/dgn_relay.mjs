import {qsdg_server} from 'qsdg'

export default async function dgn_relay_main() {
  const qsdg = await qsdg_server({ port: 8098, dg_relay: [8099] })
  console.log(`
    rpi_dgnotify:
      event source:
        http://127.0.0.1:8098/dg_relay?8099

      web watcher:
        https://shanewholloway.github.io/rollup-plugin-dgnotify/index.html?q=${Date.now().toString(36)}
    `)
}
