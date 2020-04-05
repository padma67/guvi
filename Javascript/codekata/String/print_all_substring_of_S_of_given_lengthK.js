const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
var S=data.split(" ");
  var s=S[0];
  var K=parseInt(S[1]);
  var a="";
  var count=0;
  for(var j=0;j<s.length;j++){
  for(var i=j;i<K;i++)
  {
      if(i==s.length-1)
      {
          a+=s[i];
          count=1;
          break;
      }
    else{
    a+=s[i];
        
    }
  }
  if(count==1){
        break;
    }
  a+=" "
  K+=1;
  }
  console.log(a);
});
