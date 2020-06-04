//do below progrmas in arrow function

//4.1. Print odd numbers in an array
var array=[1,2,3,4,5,6,7,8,9,11];
//arrow function  return oddnumbers in array 
var odd=array.filter((item)=>item%2!=0);
console.log(odd);

//4.2. Convert all the strings to title caps in a string array
var array=['harish','sam','jack','amir'];
//arrow function return the strings to title caps in array
var tit=array.map((item)=> item[0].toUpperCase()+item.substr(1).toLowerCase());
console.log(tit);

//4.3. Sum of all numbers in an array
var array=[1,2,3,4,5,6,7,8,9,11];
//arrow function return sum of all numbers in array 
var sum=array.reduce((accumulator,currentvalue)=> accumulator+currentvalue) 
console.log(sum);

//4.4. Return all the prime numbers in an array
var array=[1,2,3,4,5,6,7,8,9,11];
//arrow function return prime numbers in array 
var prime=array.filter(n=>{var count=0;
	if(n>1){
		for(var i=1;i<=n;i++){
         if(n%i===0){
         	count+=1;
         }}
         if(count==2){
         	return n
         }
		}});
console.log(prime);
//4.5Return all the palindromes in an array
var array=["ben","kick","temo","abba"];
//arrow function return palindrome in array 
var palindrome=array.filter(n=> { var s="";
	for( var i=n.length-1;i>=0;i--){
		s+=n[i];
	}
	if(s==n){
		return n
	}
}})
console.log(palindrome);
