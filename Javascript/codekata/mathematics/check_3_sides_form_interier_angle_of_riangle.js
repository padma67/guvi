const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
    var a=data.split(" ");
    var A=parseInt(a[0]);
    var B=parseInt(a[1]);
    var C=parseInt(a[2]);
    if(A+B+C==180){
        console.log("yes");
    }
    else{
        console.log("no");
    }
});
