const fun1 = (array, callback) => {
  for(var i=0;i<array.length;i++){
    if(callback(array[i]))
      {
        return i
      }
  }
}
const indfun =(value)=>value==5
fun1([2,3,5,8,12], indfun) 

//output
//2
