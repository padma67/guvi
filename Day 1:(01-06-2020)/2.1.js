//Update the count of person 2 inside readers Array in javascript;

//The given array
var library=[{ title:"Javascript",
               price:500,
               readers:[
               {
                     name:"Person 1",
                     coun:300
               },
               {     name:"Person 2",
                     count:400
               }
              ],
              authorDetails:{
                  name:"Raj",
                  age:40
              }
              },
          {title:"Nodejs",
           price:600,
           readers:[],
           authorDetails:{name:"Raj",age:40}}];
//create function to upadte the count of person 2 inside readers array
function update(){
  library[0].readers[1].count=455;
  return library;
  }
console.log(update());
 
