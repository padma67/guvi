const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var a=m[0].split(" ");
  var A=parseInt(a[0]);
  var B=parseInt(a[1]);
  var C=parseInt(a[2]);
  var discriminant = (B * B) - (4 * A * C);

 var root1 =((-B + Math.sqrt(discriminant)) / (2 * A));
var root2 = float((-B - Math.sqrt(discriminant)) / (2 * A));
console.log(root1.toFixed(2));
console.log(root2.toFixed(2));
});
  
