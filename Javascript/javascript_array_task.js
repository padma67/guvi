/*1 - Chunk
Creates an array of elements split into groups the length of size.
If array can't be split evenly, the final chunk will be the remaining elements. 
Example
chunk(['a', 'b', 'c']); => [['a'], ['b'], ['c']]*/

function chunk(a,k){
	if(k==undefined){
		k=1;
	}
    var b=[];
    while(a.length){
        b.push(a.splice(0,k));}return b}
console.log(chunk([1,2,3,5,6,7],4));

/*2 - compact(array)
Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
Example
compact([0,  1, false,  2,  '',  3]);=> [1, 2, 3]*/
function falsey(arr){
	var newarr=arr.filter((i)=> Boolean(i));
	return newarr
 }
 console.log(falsey([1,5,"",false]));

/*3 - flatconcat
Creates a new array concatenating and flattens array a single level deep. with any additional arrays and/or values.
Example: var array = [1];
flatconcat(array,  2, [3], [[4]]); => [1, 2, 3, 4]*/
 function flatconact(array,...x){
 	x=x.flat(Infinity)
 	array.push(...x);
 	return array
 }
 console.log(flatconact([1],  2, [3], [[4]]));

 /*4 - drop
Creates a slice of array with n elements dropped from the beginning.
Example
drop([1,  2,  3],  2); => [3] */

 function drop(a,k){
	if(k==undefined){
		k=1;
	}
	a.splice(0,k)
    return a}
console.log(drop([1,2,3,5,6,7],4));

/*5 - dropRight
Creates a slice of array with n elements dropped from the end.
Example
dropRight([1,  2,  3],  2) => [1] */
 function dropright(a,k){
	if(k==undefined){
		k=1;
	}
	a.splice(-k)
    return a}
console.log(dropright([1,2,3,5,6,7],4));

/*6 - dropWhile
Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
Example
dropRightWhile([1,2,3,4,5], (value, index, array) => value % 2 === 0) => [1, 3, 5] */
function droprightwhile(arr){
	var newarr=arr.filter(function(value,index,array){
		return value%2==0;
	});
	return newarr
}
console.log(droprightwhile([1,2,3,5,6,7]));

/*7 - findLastIndex
This method is like Array.prototype.findIndex except that it iterates over elements of collection from right to left.
Example
findLastIndex([1,2,3,4,5], (value, index, array) => value % 2 === 0)=> 3 */
function findindex(arr){
	var ind=arr.findIndex(function(value,index,array){
		return value%2==0;
	});
	return ind
}
console.log(findindex([1,2,3,5,6,7]));

/*8 - flattenDeep
Recursively flattens array.
Example
flattenDeep([1, [2, [3, [4]],  5]]); => [1, 2, 3, 4, 5] */
function flattendeep( arr){
	return arr.flat(Infinity);
}
console.log(flattendeep([1,2,3,[5],[[7]]]));

/*9 - flattenDepth
Recursively flatten array up to depth times.
Example
var array = [1, [2, [3, [4]],  5]];
flattenDepth(array,  1); => [1, 2, [3, [4]], 5] */
function flattendepth( arr,k){
	return arr.flat(k);
}
console.log(flattendepth([1,2,3,[5],[[7]]]),1);

/*10 - fromPairs
this method returns an object composed from key-value pairs.
Example
fromPairs([['a', 1], ['b', 2]]); => { 'a': 1, 'b': 2 } */
function fromPairs( a){
	var obj={};
	var i=0;
	while(i<a.length){
		var value =a[i];
		obj[value[0]]=value[1];
		i++;
	}
	return obj
}
console.log(fromPairs([['a',1],['b',2]]));
