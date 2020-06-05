//do below programs in anonymous function
//2.1. Print odd numbers in an array
var array=[1,2,3,4,5,6,7,8,9,11];
//anonymous return oddnumbers in array 
var odd=array.filter(function(item){return item%2;});
console.log(odd);

//2.2. Convert all the strings to title caps in a string array
var array=['harish','sam','jack','amir'];
//anonymous return the strings to title caps in array
var tit=array.map(function(item){return item[0].toUpperCase()+item.substr(1).toLowerCase()});
console.log(tit);

//2.3. Sum of all numbers in an array
var array=[1,2,3,4,5,6,7,8,9,11];
//anonymous return sum of all numbers in array 
var sum=array.reduce(function(accumulator,currentvalue){return accumulator+currentvalue}) 
console.log(sum);

//2.4. Return all the prime numbers in an array
var array=[1,2,3,4,5,6,7,8,9,11];
//anonymous return prime numbers in array 
var prime=array.filter(function(n){var count=0;
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
//2.5Return all the palindromes in an array
var array=["ben","kick","temo","abba"];
//anonymous return palindrome in array 
var palindrome=array.filter(function(n){ var s="";
	for(var i=n.length-1;i>=0;i--){
		s+=n[i];
	}
	if(s==n){
		return n
	}
})
console.log(palindrome);

//2.6 Return median of two sorted arrays of same size
var array1=[1,2,3,4,5];
var median1=a.reduce(function(accumulator,currentvalue){return (accumulator+currentvalue)/array1.length});
console.log(median1);

var array2=[5,6,7,8,9];
var median2=a.reduce(function(accumulator,currentvalue){return (accumulator+currentvalue)/array2.length});
console.log(median2);

//2.7 delete duplicate number in array
var array=[3,5,6,7,6,3,9];
var duplicate=function(){ for(var j=0;j<array.length;j++){
	for(var i=j+1;i<array.length;i++){
		if(array[j]==array[i]){
			array.splice(i,1);
		}
	}}
	
	return array
}
console.log(duplicate());

//2.8 rottation of array k times
var a=[1,2,3,4,5,6,7];
var rotate=function(k){
for(var j=1;j<=k;j++){
  a.unshift(...a.splice(-1,1));
} return a}
console.log(rotate(3));

