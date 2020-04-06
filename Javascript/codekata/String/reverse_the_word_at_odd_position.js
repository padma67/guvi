const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  var s=data.split(" ");
  var S="";
  var g=[];
  for(var i=0;i<s.length;i++){
      if((i+1)%2!==0){
      for(var j=s[i].length-1;j>=0;j--)
      {
          var a=s[i].split("");
          S+=a[j];      
      }
      g.push(S);
      }
      else{
      g.push(s[i]);
      }
      S="";
  }
  console.log(g.join(" "));
});
