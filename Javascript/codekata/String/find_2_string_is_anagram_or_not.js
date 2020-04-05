const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
    var s1=m[0];
    var s2=m[1];
    function isAnagram (s1,s2) {
    var sort1 = s1.split('').sort().join('');
    var sort2 = s2.split('').sort().join('');

    if (s1.length !== s2.length) {
        return 0;
    }
    else if(sort1===sort2){
        return 1;
    }
    else{
        return 0;
    }
}
console.log(isAnagram(s1,s2));
    
});
