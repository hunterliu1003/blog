const fs = require('fs')
const path = require('path')

const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())

const componentNames = dirs(path.resolve('components'))

const componentExists = comp => componentNames.indexOf(comp) > 0

module.exports = {
  componentExists
}
