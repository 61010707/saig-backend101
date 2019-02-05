asyncFunc(cb, cb);

function asyncFunc (cb1, cb2) {
  cb1('A');
  cb2('B');
}

function cb (str) {
  console.log('cb : ' + str);
}