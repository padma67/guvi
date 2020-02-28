const readline=require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const userInput=[];
inp.on("line",(data)=>{
  data=data.replace(/\s+/g, "");
  console.log(data.length);
});
