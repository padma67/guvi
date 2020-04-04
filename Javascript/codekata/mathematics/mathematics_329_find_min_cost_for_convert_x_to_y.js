const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  var a=data.split(" ");
  var X=a[0].split("");
  var Y=a[1].split("");
  var cost=0;
  if(X.length>Y.length){
          for(i=0;i<X.length;i++){
              if(i>=X.length-Y.length-Y)
              {
                  X[i]="";
                  cost+=1;
              }
              else{
                  if(X[i]!=Y[i]){
                      X[i]=Y[i];
                      cost+=1;
                  }
              }
          }
      }
  else if(X.length<Y.length){
      for(j=0;j<Y.length;j++){
          if(j>=Y.length-X.length){
              X.push(Y[j]);
              cost+=1;
          }
          else{
              if(X[j]!=Y[j]){
                      X[j]=Y[j];
                      cost+=1;}
          }
      }
  }
  else
  {
      for(k=0;k<X.length;k++){
          if(X[k]!=Y[k]){
                      X[k]=Y[k];
                      cost+=1;}
      }
  }
  console.log(cost);
});
