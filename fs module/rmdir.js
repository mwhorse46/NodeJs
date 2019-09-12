var fs = require('fs');
fs.unlink('./node/mynode.txt',function(){
  fs.rmdir('node');
});
