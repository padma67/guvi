const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  var A=(data);
  var cir=((A*9/5)+32);
  console.log(cir.toFixed(2));
});
