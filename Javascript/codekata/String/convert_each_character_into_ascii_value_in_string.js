const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
    var S=data.split("");
    var sum=0;
    for(i=0;i<S.length;i++){
        sum+=S[i].charCodeAt();
        
    }
    console.log(sum);
});
