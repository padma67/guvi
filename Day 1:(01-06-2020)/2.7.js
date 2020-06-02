//Print the age of Nodejs Author in console
//the given array
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
           
//craete function to Print the age of Nodejs Author in console
function age(){
 console.log(library[1].authorDetails["age"]);
  }
age();
