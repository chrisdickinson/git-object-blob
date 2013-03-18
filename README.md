# git-object-blob

git blob objects as javascript objects.

probably the most simple.

```javascript
var Buffer = require('buffer').Buffer
  , blob = require('git-object-blob')

var b = blob.create(new Buffer(...))

b = blob.read(<some git buffer>)

```

## API

#### blob.read(<git buffer>) -> Blob

read a blob from some git buffer data.

#### blob.create(<data>) -> Blob

create a blob from some source data.

#### Blob#data -> Buffer

original blob contents as a Buffer object.

#### Blob#size -> number

size of the blob in bytes.    
