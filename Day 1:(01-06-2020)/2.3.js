//Insert a new reader in the readers array for nodejs

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
  var a={name:"Person1",count:400};
  library[1].readers.push(a);
  var b={name:"Person2",count:500};
  library[1].readers.push(b);
  return library;
  }
console.log(insert());
