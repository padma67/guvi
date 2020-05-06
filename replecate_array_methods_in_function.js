//different type of arrayMethods
var a=[1,2,3,4];
function arrayMethod(arr){
    //multiply all array elements by 2 (map function)
    var b=[];
    for(i=0;i<arr.length;i++){
        b.push(arr[i]*2);
    }
    console.log("multiply all array elements by 2",b);
    //get only odd elements in array(filter)
    var c=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            c.push(arr[i]);
        }
    }
    console.log("odd elements in array",c);
    //check if every elements in array is greater than zero
    var count=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]>0){
            count+=1;
        }
    }
    if(count==arr.length){
        console.log("is every element in array greater than zero?",true);
    }
    else{
        console.log(false);
    }
    //find the index of 4 in array(findIndex)
    var index=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]==4){
            index=i;
            console.log("index of 4 in array",index);
            break;
        }
    }
    //concat c array by given array(concat)
    for(i=0;i<arr.length;i++){
        c.push(arr[i]);
    }
    console.log("concatination of c and a",c);
    //sum of all elements in array(sum)
    var sum=0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log("sum of array elements",sum);
}
arrayMethod(a);
