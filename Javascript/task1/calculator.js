//js file
class calculator{
insert(num){
document.form.textview.value=document.form.textview.value+num
document.form.textview.value1=document.form.textview.value-num
document.form.textview.value2=document.form.textview.value*num
document.form.textview.value3=document.form.textview.value/num
}
equal(){
var add=document.form.textview.value;
var sub=document.form.textview.value1;
var mul=document.form.textview.value2;
var div=document.form.textview.value3;
if(add){
document.form.textview.value=eval(add)
}
else if(sub){


document.form.textview.value1=eval(sub)
}
else if(mul){
document.form.textview.value2=eval(mul)
}
else if(div){
document.form.textview.value3=eval(div)
}
}
clean(){
document.form.textview.value="";
}
}
const obj =new calculator(num);
