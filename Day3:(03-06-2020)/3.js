//3. Write a callback which is called
//3.1. if the give number is even
  function even1(n,callback){
  	if(n%2==0){
  		callback();
  	}
  }
  function even2(){
  	console.log("The given number is even")
  }
  even1(4,even2)
//3.2if the give number is prime
  function prime1(n,callback){ 
  	if(n>1){ var count=0;
		for(var i=1;i<=n;i++){
         if(n%i===0){
         	count+=1;
         }}
         if(count==2){
         	callback()
         }
		}
  }
  function prime2(){
  	console.log("The given number is prime")
  }
  prime1(4,prime2)
  //3.3 if the give number is palindrome
  function palindrome1(n,callback){ 
  	var dum=n;
    var rev=0;
  	while(dum>0){
  		dec=dum%10;
  		rev=rev*10+dec
  		dum=Math.floor(dum/10);
  	}
  	if(dum=n){
  		callback()
  	}
  }
  function palindrome2(){
  	console.log("The given number is prime")
  }
  palindrome1(33,palindrome2)
