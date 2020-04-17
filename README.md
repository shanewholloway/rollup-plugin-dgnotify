# Rollup Plugin: Datagram Notify

Send [rollup][] build notifications via datagram to a UDP port.

  [rollup]: https://rollupjs.org/


## Use

#### Install

`npm install -D rollup-plugin-dgnotify`


#### In `rollup.config.js`

```javascript
import rpi_dgnotify from 'rollup-plugin-dgnotify'
// ...
plugins.push( rpi_dgnotify( /* dgnotify_options */ ))


// all settings are optional
const dgnotify_options = {
  port: 8099,
  host: '127.0.0.1',

  id: {cwd: process.cwd()},

  on_build(obj) { },
  on_error(err, obj) { },
}
```


#### Start datagram relay

- `npx rollup-plugin-dgnotify`
- `curl http://127.0.0.1:8080/dg_relay\?8099`

Or [visit the server-sent events][lh_demo] page in your browser

 [lh_demo]: http://127.0.0.1:8080/dg_relay?8099


## License

[MIT](LICENSE)

