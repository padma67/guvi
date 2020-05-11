const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
 var s=m[0].split("");
  var ob=[];
  var eb=[];
  for(i=0;i<s.length;i++)
  {
    if(s[i]=="{" || s[i]=="(" || s[i]=="[")
    {
      ob.push(s[i]);
    }
    else if (s[i]=="}" || s[i]==")" || s[i]=="]")
    {
      eb.push(s[i]);
    }
  }
  if(ob.length==eb.length)
  {
    console.log("yes");
  }
  else
  {
    console.log("no");
  }
});
  
