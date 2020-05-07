//check if any one elemnt in array is give 1,when its divided by 2
const fun1 = (array, callback) => {
  for(var i=0;i<array.length;i++){
    if(callback(array[i]))
      {
        return true
      }
  }
}
const somefun =(value)=>value%2==1
fun1([2,3,5,8,12], somefun) 

//output
//true
