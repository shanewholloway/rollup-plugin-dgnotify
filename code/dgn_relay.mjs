import {qsdg_server} from 'qsdg'

export default async function dgn_relay_main() {
  let dg_listen_addr=process.env.DGNOTIFY || '127.0.0.1'

  const qsdg = await qsdg_server({ port: 8098,
    dg_relay: [8099], dg_listen_addr, })

  console.log(`
    rpi_dgnotify:
      event source:
        http://127.0.0.1:8098/dg_relay?8099

      web watcher:
        https://shanewholloway.github.io/rollup-plugin-dgnotify/index.html?q=${Date.now().toString(36)}
    `)
}
