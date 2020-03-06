var table=document.createElement("table");
document.body.appendChild(table);
var row1=table.insertRow(0);

var t=document.createTextNode("username:")
var cell21=row1.insertCell(0);
cell21.appendChild(t);

var text=document.createElement("input");
text.setAttribute("type","text");
var cell22=row1.insertCell(1);
cell22.appendChild(text);

var row2=table.insertRow(1);

var t1=document.createTextNode(" password:");
var cell24=row2.insertCell(0);
cell24.appendChild(t1);

var text=document.createElement("input");
text.setAttribute("type","text");
var cell25=row2.insertCell(1);
cell25.appendChild(text);

var b=document.createElement("button");
b.innerHTML="login";
document.body.appendChild(b);
