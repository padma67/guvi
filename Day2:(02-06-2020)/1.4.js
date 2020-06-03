//1.4 Display the count of all countries sharing their border with the country name in
console.

var request=new XMLHttpRequest()

    	request.open("GET","https://restcountries.eu/rest/v2/all",true)
    	request.onload=function(){
    		//convert data from api into json
    		var jsonData=JSON.parse(this.response)
    		//for loop to iterate jsondata
    		for(var i in jsonData)
    		{
    			if(jsonData[i]["borders"].length===0){
    			console.log(jsonData[i]["name"]+" shares its border with "+jsonData[i]["borders"].length+" countries");	
    			}
    			//Display the count of all countries sharing their border with the country name from jsondata
    			else{
    			console.log(jsonData[i]["name"]+" shares its border with "+jsonData[i]["borders"].length+" countries that includes "+"("+jsonData[i]["borders"].join(",")+")");
    		        }
    		}
    	};
    	request.send();
