const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var A=m[0];
  var sum=1;
  for(i=1;i<=A;i++){
    sum=sum*i;
  }
  console.log(sum);
});
