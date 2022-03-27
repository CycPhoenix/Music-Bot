require('dotenv').config()

const Bot = require('./src/struct/Bot')

require('http').createServer((req, res) => res.end(`
 |-----------------------------------------|
 |              Informations               |
 |-----------------------------------------|
 |* Alive 24/7                             |
 |-----------------------------------------|
 |* Author: CycPhoenix#1050                |
 |-----------------------------------------|
 |* Server:                                |
 |-----------------------------------------|
 |* Github:                                |
 |-----------------------------------------|
 |* License: MIT                           |
 |-----------------------------------------|
`)).listen(30000)

const client = new Bot()

(async () => await client.start(process.env.TOKEN))()