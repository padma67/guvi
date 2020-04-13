//Given a square matrix of size N x N, find the sum of the product of its diagonals
const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
    var N=parseInt(m[0]);
    var a=[];
    var p1=1;
    var p2=1;
    var sm=0;
    for(var i=1;i<m.length;i++){
        a.push(m[i].split(" "));
    }
    for(var j=0;j<a.length;j++){
       p1*=a[j][j];
       p2*=a[j][a.length-j-1];
    }
    sm=p1+p2;
    console.log(sm);
});
