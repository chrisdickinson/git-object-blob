module.exports = {read: read, create: create}

function GitBlob(buf) {
  this.data = buf
  this.size = buf.length
}

var cons = GitBlob
  , proto = cons.prototype

proto.type = 2
proto.looseType = 'blob'

function read(buf) {
  return new GitBlob(buf)
}

function create(buf) {
  return new GitBlob(buf)
}
