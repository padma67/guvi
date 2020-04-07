const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
    for(var i=0;i<m.length;i++){
        var a=m[i].split(" ");
        var b=parseInt(a[0]);
        var c=parseInt(a[1]);
        var prod=b*c;
        var count=0;
        if(prod/b==b){
            count+=1;
        }
    }
    if(count==m.length){
        console.log("yes");
    }
    else{
        console.log("no");
    }
   
});
