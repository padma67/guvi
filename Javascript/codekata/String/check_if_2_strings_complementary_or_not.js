const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
    var S1=m[0];
    var S2=m[1];
    var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var b=S1+S2;
    if(a==b.split("").sort().join("")){
        console.log("yes");
    }
    else{
        console.log("no");
    }
});
