const readline = require ('readline');
/*The longest common prefix for N strings of length at most M each is defined as a string K
Such that every string has K as a prefix.
You are given the task of finding the longest common prefix for N such strings.*/
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
    var N=parseInt(m[0]);
    var c=[];
    var d=[];
    for(var j=1;j<m.length;j++){
        var b=m[j].split("");
        for(var i=0;i<b.length;i++){
                if(b[i]==c[i]){
                    d.push(b[i]);
                }
        }
        if(j==1){
        c=b;}
        else{
            c=d;
        }
        d=[];
    }
    console.log(c.join(""));
});
    
