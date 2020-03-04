const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  var A=data;8
  console.log(A,A*2,A*3);

});
