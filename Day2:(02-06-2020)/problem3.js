//Problem3

/* Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
Input (Object):
var object = {name: “ISRO”, age: 35, role: “Scientist”};
Output:
[[“name”, “ISRO”], [“age”, 35], [“role”, “Scientist”]] */

var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
var a=[];
var newArray=[];
//function to convert an object  into  an array of arrays.
function convertListToObject(obj) {
 //for loop to iterate through objects
	for(var i in obj){
  //push object key and values as array to newArray
		a.push(i,obj[i]);
		newArray.push(a);
		a=[];
	}
	console.log(newArray);
}
convertListToObject(obj);
