import {relative} from 'path'
import {createSocket} from 'dgram'

export default function (opt={}) {
  let _id_cache
  const udp_src = createSocket('udp4')
  udp_src.unref()

  return {
    name: 'dgram-notify',
    buildEnd(err) {
      const obj = {
        id: opt.id || _build_id_for(this),
        err }

      if (err) {
        if (opt.on_error) {
          if (false === opt.on_error(err, obj))
            return
        }
      } else if (opt.on_build) {
        if (false === opt.on_build(obj))
          return

      } if (opt.echo) {
        if (true === opt.echo) {
          console.log('[rollup build dgram]:', obj)
        } else opt.echo(obj)
      }

      udp_src.send(
        Buffer.from(
          JSON.stringify(obj) ),

        opt.port || 8099,
        opt.host || '127.0.0.1')
    }, }


  function _build_id_for(ctx) {
    if (undefined === _id_cache) {
      const cwd = relative(
        process.env.HOME,
        process.cwd())

      _id_cache = {cwd}
    }

    const res = {
      ... _id_cache,
      ts: new Date().toISOString(),
      }

    return res
  }
}
