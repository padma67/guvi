//Find the datatype of auhor age in Nodejs object

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
           
//craete function to Find the datatype of auhor age in Nodejs object
function type(){
 var a=typeof(library[1]["authorDetails"]["age"]);
  return a;
  }
console.log(type());
