asyncFunc(cb, cb);

function asyncFunc (running, done) {
  for (var i = 0;i<10;i++) {
    running('i = ' + i);
  }
  done('done');
}

function cb (str) {
  console.log(str);
}