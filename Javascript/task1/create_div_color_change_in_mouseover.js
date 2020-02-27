//htmli documnet
<!DOCTYPE html>
<html>
<head>
<title>Create div and change color when onmouseover</title>
<body>
<script src="task1.js">

</script>
</body>
</html>

//js document
var x=document.createElement("div");
x.id="a";
x.style.color="red";
var t=document.createTextNode("hi");
x.appendChild(t);
document.body.appendChild(x);
document.getElementById("a").onmouseover=function() {
mouseover()
};

function mouseover(){
document.getElementById("a").style.color="blue";
}
