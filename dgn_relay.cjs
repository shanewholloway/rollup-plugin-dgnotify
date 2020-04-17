#!/usr/bin/env node
const dgn_relay = require('./cjs/dgn_relay.cjs')
dgn_relay(process.argv.slice(2), process.env)

