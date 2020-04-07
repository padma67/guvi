const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
    var a=m[1].split(" ");
    var b=Math.min.apply(null,a);
    var c=Math.max.apply(null,a);
    var index1=0;
    var index2=0;
    for(i=0;i<a.length;i++){
        if(a[i]==b){
            index1=i+1;
        }
        else if(a[i]==c){
            index2=i+1;
        }
    }
    console.log(index1,index2);
});
