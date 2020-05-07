//concatenation of two array
const fun1 = (array1,array2) => {
  let a=array1;
  for(var i=0;i<array2.length;i++){
    a.push(array2[i]);
  }
  return a
}
fun1([1,2,3,4],[5,6,7,8])
//output
//[1, 2, 3, 4, 5, 6, 7, 8]
