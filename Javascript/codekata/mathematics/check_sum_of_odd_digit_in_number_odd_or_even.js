const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
inp.on("line",(data)=>{
  var n=parseInt(data);
    var sum=0;
    var dig=0;
    while(n>0){
        dig=n%10;
        if(dig%2!==0){
          sum=sum+dig;
        }
      n=Math.floor(n/10);
    }
    if(sum%2===0){
      console.log("E");
    }
    else{
      console.log("O");
    }
});
