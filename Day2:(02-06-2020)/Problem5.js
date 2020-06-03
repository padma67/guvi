//Problem5

/* Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
Input (Array):
var array = [[“make”, “Ford”], [“model”, “Mustang”], [“year”, 1964]];
Output:
var object = {
make : “Ford”
model : “Mustang”,
year : 1964
}*/

var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
 var newObject = {};
 for(var i=0; i<arr.length;i++){
 	var value=arr[i];
    newObject[value[0]]=value[1];
 }
 
 return newObject;
}
fromListToObject(arr);
