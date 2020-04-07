/*Given 2 numbers N and K followed by N numbers such that sum of two pairs in the N numbers results K value, if it exist print 'yes' otherwise 'no'.
Given 2 numbers N and K followed by N numbers such that sum of two pairs in the N numbers results K value,if it exist print 'yes' otherwise 'no'.*/
const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
    var b=m[0].split(" ");
    var k=b[1];
    var a=m[1].split(" ");
    var count=0
    for(var i=0;i<a.length;i++){
        if(i==a.length-1){
            if(parseInt(a[i]+parseInt(a[0]))){
                count=count+1;
                break;
            }
        }
        else if(parseInt(a[i])+parseInt(a[i+1])==k){
            count=count+1;
            break;
        }    
    }
    if(count==1){
        console.log("yes");
    }
    else{
        console.log("no");
    }
});
