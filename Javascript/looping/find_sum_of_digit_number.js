var n=prompt;
var d=0;
var count=0;
while(n>0)
{
    count=n%10;
    d=d+count;
    n=Math.floor(n/10);
}
console.log(d);
