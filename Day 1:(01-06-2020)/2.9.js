//Print the cuont of person 2inside readers array in javascript
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
           
//craete function toPrint the cuont of person 2 inside readers array in javascript
function count(){
 console.log(library[0].readers[1]["count"]);
  }
  count();
