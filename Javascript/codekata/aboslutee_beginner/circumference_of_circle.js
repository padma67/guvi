const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  var A=(data);
  var cir=((A)*Math.PI*2);
  console.log(cir.toFixed(2));
});
