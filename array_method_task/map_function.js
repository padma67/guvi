//finding square root of elements in array 

const fun1 = (array, callback) => {
  let a=[];
  for(var i=0;i<array.length;i++){
    a.push(callback(array[i]));
  }
  return a
}
const mapfun =(value)=>Math.sqrt(value);
fun1([2,3,5], mapfun) 

//output
[1.4142135623730951, 1.7320508075688772, 2.23606797749979]
