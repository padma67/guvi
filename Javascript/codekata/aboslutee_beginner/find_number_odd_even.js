const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {

if(data%2==0)
{
  console.log("Even");
}
else
{
 console.log("Odd");
}});
