//problem2
/*Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
Example Input:
{name : ‘RajiniKanth’, age : 25, hasPets : true}
Example Output:
[‘name’, ‘age’, ‘hasPets’]*/
var obj = {name : 'RajiniKanth', age : 33, hasPets : false};

//function which returns an newArray of all the input object’s keys
function printAllValues(obj) {
 var newArray=[];
 //for loop to iterate through objects
 for(var i in obj){
 //push input object key's to newArray
 	newArray.push(i);
 }
 console.log(newArray);
}
printAllValues(obj);
