/* Problem:
Write a function called “addFive”.
Given a number, “addFive” returns 5 added to that number.
Input:addFive(5); addFive(0); addFive(-5);
Output:10 5 -10 */

var num = 10;
function addFive(num) { 
   num=num+5;
   return num;
}
var result = addFive(num)
console.log(result)


/*Write a function called “getOpposite”.
Given a number, return its opposite
Input:
getOpposite(5); getOpposite(“5a”); getOpposite(5.5);
Output:
-5 -1 -1 */

var num = 5;
function getOpposite(num) {
 if(typeof(num)=="number"){
 return 5 * -1;
}
else{
return -1;
}}
var result = getOpposite(num)
console.log(result)

/*Fill in your code that takes an number minutes and converts it to seconds.
Examples toSeconds(5) ➞ 300 */

var min = 5;
function toSeconds(min) {
return min*60
}
var secs = toSeconds(min)
console.log(secs)

/*Create a function that takes a string and returns it as an integer.
Examples toInteger(“6”) ➞ 6 */

var mystr = "5";
function toInteger(mystr) {
return parseInt(mystr)
}
var myint = toInteger(mystr)
console.log(mystr)

/*Create a function that takes a number as an argument, increments the number by +1 and returns the result.
Examples nextNumber(0) ➞ 1 */
var myint = 0;
function nextNumber(myint) {
return myint++;
}
var myNextint = nextNumber(myint)
console.log(myNextint)

/*Create a function that takes an array and returns the first element.
Examples getFirstElement([1, 2, 3]) ➞ 1 */
var arr = [1, 2, 3];
function getFirstElement(arr) {
return arr[0]
}
var data = getFirstElement(arr)
console.log(data)

/*Convert Hours into Seconds
Write a function that converts hours into seconds.
Examples hourToSeconds(2) ➞ 7200 */
var arr = [1, 2, 3];
function hourToSeconds(arr) {
var newarr=arr.map(x => x * 60);
return newarr.join(",");
}
var data = hourToSeconds(arr)
console.log(data);

/*Find the Perimeter of a Rectangle
Create a function that takes height and width and finds the perimeter of a rectangle.
Examples findPerimeter(6, 7) ➞ 26 */
function findPerimeter(num1,num2) {
return 2(num1+num2);
}
var peri = findPerimeter(6,7)
console.log(peri);

/*Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
Examples lessThan100(22, 15) ➞ true */
function lessThan100(num1,num2) {
return (num1+num2)<100
}
var res = lessThan100(22,15)
console.log(res)

/*There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
Examples  remainder(1, 3) ➞ 1 */
function remainder(num1,num2) {
return num1%num2
}
var res = remainder(1,3)
console.log(res)

/*Old macdonald had a farm:
MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
turkey = 2 legs
horse = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
Examples
CountAnimals(2, 3, 5) ➞ 36 */
function CountAnimals(tur,horse,pigs) {
return (tur*2)+(horse*4)+(pigs*4)
}
var legs = CountAnimals(2,3,5)
console.log(legs)

/*Frames Per Second
Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
Examples frames(1, 1) ➞ 60 frames(10, 25) ➞ 15000 */
function frames(num1,num2) {
return (num1*60*num2)

}
var fps = frames(1,2)
console.log(fps)

/*Check if an Integer is Divisible By Five
Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
Examples divisibleByFive(5) ➞ true */

function divisibleByFive(num1) {
if(num1%5==0){
return true}
else{ return fals}
}
var divisible = divisibleByFive(5)
console.log(divisible)

/*Write a function called “isEven”.
Given a number, “isEven” returns whether it is even.
Input:
isEven(11);
isEven(“11h”);
Output:
false
-1 */

function isEven(num){
 if(typeof(num)=="number"){
  if(num%2===0){return true}
  else{return false}
  }
 else{return -1}
}
var even = isEven(5)
console.log(even)

/*Write a function called “areBothOdd”.
Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
Input:
areBothOdd(1, 3);
areBothOdd(1, 4);
Output:
true
flase */
function areBothOdd(num1, num2){
 if(num1%2!==0 && num2%2!==0){
 return true}
 else{return false}
}
var odd=areBothOdd(1,3)
console.log(odd);

/*Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
Input:
getFullName(“GUVI”, “GEEK”); getFullName(“GUVI”, ); getFullName(, “GEEK”); getFullName(“”, “”);
Output: “GUVI GEEK” “GUVI” “GEEK” “” */

function getFullName(firstName, lastName){
 return firstName+lastName
}
var fullname=getFullName("", "GEEK");
console.log(fullname)

/*Write a function called “getLengthOfWord”.
Given a word, “getLengthOfWord” returns the length of the given word.
Input:
getLengthOfWord(“”);
getLengthOfWord();
getLengthOfWord(9);
Output:
0
-1
-1 */
function getLengthOfWord(word1){
 if(typeof(word1)=="string"){
 	return word1.length
 }
 else{return -1}
}
var length=getLengthOfWord();
console.log(length);

/* Write a function called “isSameLength”.
Given two words, “isSameLength” returns whether the given words have the same length.
Input: isSameLength(“GUVI”, “GEEK”);
Output: true */

function isSameLength(word1, word2){
 if(word1.length==word2.length){
 	return true
 }
 else{return false}
}
var equ=isSameLength("GUVI","GEEK");
console.log(equ)

/* Create a function to calculate the distance between two points defined by their x, y coordinates*/
function getDistance(x1, y1, x2, y2)
{
 console.log(x1-y1,x2-y2)
}
console.log(getDistance(100, 100, 400, 300));


/* Write a function called “getNthElement”.
Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. 
If the array has a length of 0, it should return ‘undefined’.
Input: getNthElement([1, 3, 5], 1);
Output: 3 */
function getNthElement(array,n){
 return array[n];
}
console.log(getNthElement([1, 3, 5], 1))



/*Write a function called “getLastElement”.
Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
Input: getLastElement([1, 2, 3, 4]);
Output: 4 */

function getLastElement(array){
 if(array.length===0){
 	return -1
 }
 else{
 	return array[array.length-1]
 }}
 console.log(getLastElement([1, 2, 3, 4]))



/*Write a function called “getProperty”. 
Given an object and a key, “getProperty” returns the value of the property at the given key.
 If there is no property at the given key, it should return undefined.
var obj = {
mykey: “value”
};
Input: getProperty(obj,’mykey’);
Output: value */
var obj = {
 mykey: 'value'
};
function getProperty(obj, key) {
 return obj[key]
}
console.log(getProperty(obj,'myke'))


/*Write a function called “addProperty”.
Given an object, and a key, “addProperty” sets a new property on the given object with a value of true.
var obj = {
mykey: “value”,
myProperty: true
}
Input:removeProperty(obj, “mykey”); removeProperty(obj, “name”);
Output:
{
myProperty: true
}
undefined */
var obj = {
 mykey: “value”
};
function addProperty(obj, key){
 
}


/*Write a function called “removeProperty”.
Given an object and a key, “removeProperty” removes the given key from the given object.
Input: removeProperty(obj, “name”);
Output: undefined */

function removeProperty(obj, key){
 if(obj[key]==undefined){
 	return undefined
 }
 else{
 	delete obj["key"];
 	}
}
console.log(removeProperty(obj, 'mykey'))



/*Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.*/
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var newarr=[];
 var sump=0,sumn=0;
var ar2 = function (arr) {
 for(i=0;i<arr.length;i++){
 	if(arr[i]<0){
 		sumn+=arr[i]
 	}
 	else{
 		sump+=arr[i]
 	}
 }
 newarr.push(sump,sumn);
 return newarr;

}
console.log(ar2);


/* Create a function that receives an array of numbers and returns an array containing only the positive numbers */
function getPositives(ar)
{
 var newarr=ar.filter(x => x>=0);
 return newarr

}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);



/*Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
n = 0 -> 2⁰ -> [1]
n = 1 -> 2⁰, 2¹ -> [1,2]
n = 2 -> 2⁰, 2¹, 2² -> [1,2,4]
Input:
powersOfTwo(0)
powersOfTwo(1)
powersOfTwo(2)
Output:
1
1,2
1,2,4*/
function powersOfTwo(n){
	var res=[];
	for(i=0;i<=n;i++){
		res.push(2**i)
	}
  
  return res;
}
console.log(powersOfTwo(3));

//Find the maximum number in an array of numbers
function findMax(ar)
{
	for(i=0;i<ar.length;i++){
		if(ar[i]<ar[i+1]){
            t=ar[i];
            ar[i]=ar[i+1];
            ar[i+1]=t
		}
	}
	return ar[0]
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max:", max);





//Reverse a string
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{ var rev="";
    for(var i=s.length-1;i>=0;i--){
		rev+=n[i];
	}
	return rev
}
//Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 //this will add the 2nd array to the result array
for(let l of ar2)
 {
 result.push(l);
 }
 
 
 
 return result;
}
/*Problem:
Calculate the sum of numbers received in a comma delimited string */
console.log(sumCSV('1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9'));
function sumCSV(s)
{
  var array=[];
  array=s.split(",");
  var sum=array.reduce(function(accumulator,currentvalue){return accumulator+currentvalue}) 
console.log(sum);

}

