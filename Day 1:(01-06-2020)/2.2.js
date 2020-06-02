/*Insert a new key called email and assign a value email1@gmail.com 
and email2@gmail.com respectively in both authorDetails object */

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
           
//craete function to Insert a new key called email in authorDetails
function insert(){
  library[0].authorDetails['email']="email1@gmail10.com";
  library[1].authorDetails['email']="email1@gmail2.com";
  return library;
  }
console.log(insert());
