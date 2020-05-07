
const fun1 = (array, callback) => {
  Var count=0;
  for(var i=0;i<array.length;i++){
    if(callback(array[i]))
      {
        count+=1;
      }
  }
  if(count==array.length){
    return true
  }
  else
    {
      return false
    }
}
const mapfun =(value)=>value>0
fun1([2,3,5,8,12], mapfun) 

//output
//true
