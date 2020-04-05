const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
    var s1=m[0].split("");
    var s2=m[1].split("");
    var count=0;
    if(s1.length<s2.length){
    for(i=0;i<s1.length;i++){
        for(j=0;j<s2.length;j++){
            if(s1[i]==s2[j])
            {
                if(i===0)
                {
                    index=j+1;
                }
               count=count+1; 
            }
        }
    }
    if(count==s1.length)
    {
        console.log(index);
    }
    }
    
    if(s1.length>s2.length){
    for(i=0;i<s2.length;i++){
        for(j=0;j<s1.length;j++){
            if(s2[i]==s1[j])
            {
                if(i===0)
                {
                    index=j+1;
                }
               count=count+1; 
            }
        }
    }
    if(count==s2.length)
    {
        console.log(index);
    }
    }
});
