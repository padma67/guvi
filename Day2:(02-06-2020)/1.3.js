//1.3 Extract and print all the country name with alpha3Code and population in console.

var request=new XMLHttpRequest()

    	request.open("GET","https://restcountries.eu/rest/v2/all",true)
    	request.onload=function(){
    		//convert data from api into json
    		var jsonData=JSON.parse(this.response)
    		//for loop to iterate jsondata
    		for(var i in jsonData)
    		{
    			//print the name,alpha3code and population of country from jsondata
    			console.log(jsonData[i]["name"]+": "+jsonData[i]["alpha3Code"]+" and population is "+jsonData[i]["population"]);
    		}
    	};
    	request.send();
