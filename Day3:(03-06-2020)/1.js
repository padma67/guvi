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
console.log(odd)
