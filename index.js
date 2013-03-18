module.exports = {read: read, create: create}

function GitBlob(buf) {
  this._data = buf
}

var cons = GitBlob
  , proto = cons.prototype

proto.type = 3 
proto.looseType = 'blob'

proto.serialize = 
proto.data = function() {
  return this._data
}

function read(buf) {
  return new GitBlob(buf)
}

function create(buf) {
  return new GitBlob(buf)
}
