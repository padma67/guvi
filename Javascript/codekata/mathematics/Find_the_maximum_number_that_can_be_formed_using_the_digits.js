const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
    var s=data.split("");
    for(var i=0;i<s.length;i++){
        for(var j=i+1;j<s.length;j++){
            if(s[i]<s[j]){
                var temp=s[i];
                s[i]=s[j];
                s[j]=temp;
            }
        }
    }
    console.log(s.join(""));
});
