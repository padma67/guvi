const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
    var b=m[0];
    var a=[];
    var c="";
    var count=0;
    for(var i=0;i<b.length;i++){
        a=b.split("");
        a[i]="";
        var s=a.join("");
        
        for(var j=a.length-1;j>=0;j--){
            c+=a[j];
        }
        if(c==s){
            count=1;
            break;
        }
        a=[];
        c="";
    }
    if(count==1){
        console.log("YES");
    }
    else{
        console.log("NO");
    }
});
    
