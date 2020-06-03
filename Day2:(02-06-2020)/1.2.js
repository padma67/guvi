//1.2 Extract and print the all the country name with capital name in console

var request=new XMLHttpRequest()

    	request.open("GET","https://restcountries.eu/rest/v2/all",true)
    	request.onload=function(){
    		//convert data from api into json
    		var jsonData=JSON.parse(this.response)
    		//for loop to iterate jsondata
    		for(var i in jsonData)
    		{
    			//print the name and capital of country from jsondata
    			console.log(jsonData[i]["name"]+": "+jsonData[i]["capital"]);
    		}
    	};
    	request.send();
