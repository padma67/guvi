//Problem 0 :partA
//the given json
var cat = {
 name: 'Fluffy',
 activities: ['play', 'eat cat food'],
 catFriends: [
 {
 name: 'bar',
 activities: ['be grumpy', 'eat bread omblet'],
 weight: 8,
 furcolor: 'white'
 }, 
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }
 ]
}
//Add height and weight to Fluffy
cat.weight=5;
cat.height=6;

//Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name="Fluffyy";

//List all the activities of Fluffyy’s catFriends.
for(var i=0;i<cat.catFriends.length;i++){
	console.log(cat.catFriends[i]["activities"]);
};

//Print the catFriends names.
for(var i=0;i<cat.catFriends.length;i++){
	console.log(cat.catFriends[i]["name"]);
};

//Print the total weight of catFriends
console.log(cat.catFriends[0].weight+cat.catFriends[1].weight)

//Print the total activities of all cats (op:6)
console.log(cat.activities.length+cat.catFriends.activities[0].length+cat.catFriends[1].activities.length)

//Add 2 more activities to bar & foo cats
cat.catFriends[0].activities.push("run","jump");
cat.catFriends[1].activities.push("run","jump");

//Update the fur color of bar
cat.catFriends[0].furcolor="brown";
