const path = require('path')

function render(req, res) {
  return res.sendFile(path.resolve(__dirname, 'index.html'))
}

module.exports = render
