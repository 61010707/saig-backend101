asyncFunc(function (str) {
    console.log('cb1 : ' + str);
}, function (str) {
    console.log('cb2 : ' + str);
});
  
function asyncFunc (cb1, cb2) {
    cb1('A');
    cb2('B');
}