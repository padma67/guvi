//Create a new object in the library for a new Book called SQL

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
           
//craete function to Insert a new reader in the readers array for nodejs
function insert(){
  var c={title:"SQL",
           price:600,
           readers:[],
           authorDetails:{name:"Raj",age:40}};
  library.push(c);
  return library;
  }
console.log(insert());
