/*In a garage the service man takes 10 minutes to service one car.If there are N cars in garage and X is number of minutes after which one person arrives,
Calculate how much time last person has to wait in garage.(Print answer in minutes)*/
const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var a=m[0].split(" ");
  var N=parseInt(a[0]);
  var X=parseInt(a[1]);
  var t=0;
  var tt=10;
  for(i=1;i<N;i++){
      t=t+(tt-X);
  }
  console.log(t);
});
