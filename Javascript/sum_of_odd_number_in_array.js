var a=[1,2,3,4,5,6,7,8,9,11];
var sum=a.reduce(function(accumulator,currentvalue) {if(currentvalue%2!=0){return accumulator+currentvalue;}return accumulator});
console.log(sum);
