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
    var s=a[0].split("");
    var q=a[1].split("");
    var k=a[2];
    var count=0;
    for(var i=0;i<s.length;i++){
        for(var j=0;j<q.length;j++){
            if(s[i]==q[j]){
                count+=1;
                break;
            }
        }
    }
    if(s.length-count==k){
        console.log("yes");
    }
    else{
        console.log("no");
    }
   

});
