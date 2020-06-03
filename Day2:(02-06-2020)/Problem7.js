//problem 7
//compare 2 objects are equal or not using JSON.stringify():

//2 given objects
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6};

//function to compare 2 objects and return results 
function assertObjectsEqual(actual, expected, testName){
//check 2 objects are equal or not
  if(JSON.stringify(actual)==JSON.stringify(expected)){
  	console.log("Passed");
  }
  else{
  	console.log("FAILED [myTest] Expected "+ JSON.stringify(actual) +" but got "+JSON.stringify(expected));
  }
}
assertObjectsEqual(actual, expected, 'detects that two objects are equal');
