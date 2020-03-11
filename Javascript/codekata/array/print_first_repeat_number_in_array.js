const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var A=m[0].split(" ");
  var B=m[1].split(" ");
  var count=0;
  for(var i=0;i<B.length;i++)
  {
    for(var j=i+1;j<B.length;j++)
    {
      if(B[i]==B[j])
      {
        count=count+1
        break
      }
    }
    if(count==1)
    {
      break
    }
  }
  if(count==1){
    console.log(B[i]);
  }
  else
  {
    console.log("unique");
  }
});
