//find even numbers in array 
const fun1 = (array, callback) => {
  let a=[];
  for(var i=0;i<array.length;i++){
    if(callback(array[i]))
      {
        a.push(array[i]);
      }
  }
  return a
}
const filfun =(value)=>value%2==0
fun1([2,3,5,8,12], filfun) 

//output
[2, 8, 12]
