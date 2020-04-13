const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
    var N=parseInt(m[0]);
    var b=[];
    var sum=0;
    while(N>0){
        var dig=N%10;
        sum+=dig;
        N=Math.floor(N/10);
    }
    var s=sum;
    var f="";
    while(s>0){
        var de=s%10;
        f+=de;
        s=Math.floor(s/10);
        
    }
    if(sum==parseInt(f)){
        console.log("yes");
    }
    else{
        console.log("no")
    }
    
});
