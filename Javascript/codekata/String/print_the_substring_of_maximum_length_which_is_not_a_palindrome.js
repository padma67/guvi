const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
    var S=m[0].split("");
    var s="";
    for(i=S.length-1;i>=0;i--){
        s+=S[i];
    }
    while(s==S.join("")){
        S.pop();
    }
    console.log(S.join(""));
});
