*/Given a string S of length N, find if it forms a double string after deleting 1 character.
Examples of double strings(meme,rara,fashionfashion).*/
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
    var count=0;
    if(b.length%2===0){
        console.log("NO");
    }
    else{
    for(var i=0;i<b.length;i++){
        a=b.split("");
        a[i]="";
        var s=a.join("");
        var d=s.length/2;
        var f=s.split("");
        var s1="";
        var s2="";
        for(var j=0;j<d;j++){
            s1+=f[j];
        }
        for(var k=d;k<s.length;k++){
            s2+=f[k];
        }
        if(s1==s2){
            count=1;
            break;
        }
    }
    if(count==1){
        console.log("YES");
    }
    else{
        console.log("NO");
    }
    }
    
});
    
