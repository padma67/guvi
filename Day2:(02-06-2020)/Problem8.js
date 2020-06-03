//Problem 8

var securityQuestions = [
 {
 ques: 'What was your first pet’s name?',
 expectedAnswer: 'FlufferNutter'
 },
 {
 ques: 'What was the model year of your first car?',
 expectedAnswer: '1985'
 },
 {
 ques: 'What city were you born in?',
 expectedAnswer: 'NYC'
 }
]
var Ques = 'What was your first pet’s name?';
var ans  =  'FlufferNutter';
var question={};
question["ques"]=Ques;
question["expectedAnswer"]=ans;
function chksecurityQuestions(securityQuestions,question) {
for(var i in securityQuestions){
	if(JSON.stringify(securityQuestions[i])==JSON.stringify(question)){
		return true
	}
	else{
		return false
	}
} 
}

var status=chksecurityQuestions(securityQuestions,question);
console.log(status);
