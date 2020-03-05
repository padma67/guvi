var first=document.createElement("div");
first.id="a";
var t1=document.createTextNode("Iam div1");
first.appendChild(t1);
document.body.appendChild(first);

var second=document.createElement("div");
second.id="b";
var t2=document.createTextNode("Iam div2");
second.appendChild(t2);
document.body.appendChild(second);

var b=document.createElement("button");
b.innerHTML="click";
b.onclick=function(){
swap()};
document.body.appendChild(b);
function swap(){
var t=first.innerHTML;
first.innerHTML=second.innerHTML;
second.innerHTML=t;
