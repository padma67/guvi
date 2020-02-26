var a=['harish','sam','jack','amir'];
var tit=a.map(function(item){return item[0].toUpperCase()+item.substr(1).toLowerCase()});
console.log(tit);
