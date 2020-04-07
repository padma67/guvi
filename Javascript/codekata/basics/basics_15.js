/*Kabali is a brave warrior who with his group of young ninjas moves from one place to another to fight against his opponents. Before Fighting he just calculates one thing, the difference between his ninja number and the opponent's ninja number. 
From this difference he decides whether to fight or not. Kabali's ninja number is never greater than his opponent.
Input
The input contains two numbers in every line. 
These two numbers in each line denotes the number ninjas in Kabali's clan and his opponent's clan .
print the difference of number of ninjas between Kabali's clan and his opponent's clan. Each output should be in seperate line.*/
const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
    for(i=0;i<m.length;i++){
        var a=m[i].split(" ");
        var d=a[1]-a[0];
        console.log(d);
    }
});
