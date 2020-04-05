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
    var prod1=1;
    var prod2=1;
    var A=parseInt(a[0]);
    var B=parseInt(a[1]);
        for(j=1;j<=A;j++){
            prod1=prod1*j;
        }
        for(j=1;j<=B;j++){
            prod2=prod2*j;
        }
        
    function gcd_rec(prod1, prod2) {
    if (prod2) {
        return gcd_rec(prod2, prod1 % prod2);
    } else {
        return Math.abs(prod1);
    }
}
console.log(gcd_rec(prod1,prod2));
});
