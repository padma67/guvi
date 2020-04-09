/*Given a number N which is the number of people in the tournament, 
If the tournament starts with number of players N not equal to a power of 2, some players need to be given byes (in order to make the count a power of 2) ,
which transfers players directly to the next round because they have no opponent assigned to them.Find the minimum number of byes that has to be given.
If there is no requirement of print '0'. */
const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
   var a=parseInt(m[0]);
   var p=0;
   var count=0
   var res=0;
   if(a%2!==0){
       a=a-1;
       count+=1;
   }
   while(a>0){
   for(var i=1;i<=a/2;i++){
       p=Math.pow(2,i);
       if(a==p){
        res=1;
        break;
       }
   }
   if(res===0){
       a=a-1;
       count+=1;
   }
   else{
       break;
   }
   }
   if(res===1){
   console.log(count);}
   else{
       console.log(0);
   }
   
});
