//Problem9

//Write a function to return the list of characters below 20 age in given json object

var students = [
 {
 name: 'Siddharth Abhimanyu', age: 21}, { name: 'Malar', age: 25},
 {name: 'Maari',age: 18},{name: 'Bhallala Deva',age: 17},
 {name: 'Baahubali',age: 16},{name: 'AAK chandran',age: 23},   {name:'Gabbar Singh',age: 33},{name: 'Mogambo',age: 53},
 {name: 'Munnabhai',age: 40},{name: 'Sher Khan',age: 20},
 {name: 'Chulbul Pandey',age: 19},{name: 'Anthony',age: 28},
 {name: 'Devdas',age: 56} 
 ];
 
 //function to return the list of characters below 20 age in given json object
function returnMinors(arr)
{
  //craete a list to store characters name who below 20 age
	var list=[];
  //for loop for iterate through student
	for(var i in arr){
		if(arr[i]["age"]<20){
			list.push(arr[i]["name"]);
		}
	}
	return list
}
console.log(returnMinors(students));
