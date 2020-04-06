const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var S1=m[0].split("");
  var S2=m[1].split("");
  var count=0;
  var index=0;
  for(i=0;i<S2.length;i++){
      for(j=0;j<S1.length;j++){
          if(S2[i]==S1[j]){
              if(i===0){
                index=j;  
              }
              count+=1;
             
          }
      }
  }
  if(count==S2.length){
      console.log(index);
  }
  else
  {
      console.log(-1);
  }
});
