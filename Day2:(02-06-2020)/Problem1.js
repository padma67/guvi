//Problem 1 
/*Write a function called “printAllValues” which returns an newArray of all the input object’s values.
Input (Object):
var object = {name: “RajiniKanth”, age: 33, hasPets : false};
Output:
[“RajiniKanth”, 33, false]*/


var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
//function to return an newArray of all the input object’s values
function printAllValues(obj) {
	var newArray=[];
//for loop to iterate object
 for(var i in obj){
 //push value of objects to newarray
 	newArray.push(obj[i]);
 }
 return newArray;
}
printAllValues(obj);
