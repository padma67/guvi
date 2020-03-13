const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
inp.on("line",(data)=>{
  var n=parseInt(data);
    var sum=0
    while(n>0){
        var dig=n%10;
        sum=sum+(dig*dig);
        n=Math.floor(n/10);
    }
    console.log(sum);
});
