const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var S=m[0].split("");
  var vowel="aeiou";
  var c="";
  var s="";
  var v=vowel.split("");
  for(i=0;i<S.length;i++){
      var count=0;
      for(j=0;j<v.length;j++){
          if(S[i]==v[j]){
              s+=S[i];
              count=1;
          }
      }
      if(count===0){
          c+=S[i];
      }
  }
  console.log(s+c);
});
