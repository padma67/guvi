//Extract and print all the country name with the flag URL in console

//initialize xmlhttprequest
    	var request=new XMLHttpRequest()

    	request.open("GET","https://restcountries.eu/rest/v2/all",true)
    	request.onload=function(){
    		//convert data from api into json
    		var jsonData=JSON.parse(this.response)
    		//for loop to iterate jsondata
    		for(var i in jsonData)
    		{
    			//print the name and flag of country from jsondata
    			console.log(jsonData[i]["name"] +":" +jsonData[i]["flag"]);
    			
    		}
    	};
    	request.send();
