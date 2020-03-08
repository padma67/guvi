const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
inp.on("line",(data)=>{
if(parseInt(data)%11==0){
  console.log("YES");
}
else
{
  console.log("NO");
}
});
