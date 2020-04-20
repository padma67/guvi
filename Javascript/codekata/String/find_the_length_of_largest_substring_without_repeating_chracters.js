//Given a string, find the length of the longest substring without repeating characters.
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
    var d=[];
    for(var i=0;i<S.length;i++){
        var count=0;
        for(var j=0;j<d.length;j++){
            if(S[i]==d[j]){
                count+=1;
            }
        }
        if(count===0){
            d.push(S[i])
        }
        else{
            break;
        }
            
    }
    console.log(d.length);
   
});
    
