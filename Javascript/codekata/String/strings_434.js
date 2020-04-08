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
 var s="";
 for(var i=a.length-1;i>=0;i--){
     s+=a[i];
 }
 var b=s.split("");
 var c=b.length-1;
 for(var j=0;j<b.length;j++){
     if(b[j]==b[c]){
         b[j]="";
         b[c]="";
         c--;
     }
     else{
         break;
     }
 }
console.log(b.join(""));
});
