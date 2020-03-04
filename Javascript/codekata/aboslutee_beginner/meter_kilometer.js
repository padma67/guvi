const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  var A=data;
  console.log(A*1000);
  console.log(A*100000);

});
