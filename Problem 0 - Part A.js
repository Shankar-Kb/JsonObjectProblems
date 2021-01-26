/* Basic Tasks to play with JSON
Add height and weight to Fluffy
Fluffy name is spelled wrongly. Update it to Fluffyy
List all the activities of Fluffyy’s catFriends.
Print the catFriends names.
Print the total weight of catFriends
Print the total activities of all cats (op:6)
Add 2 more activities to bar & foo cats
Update the fur color of bar */


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

   console.log(cat);
   cat.height = 4;
   cat.weight = 5;
   console.log(cat);
   cat.name = 'Fluffy';


   for (var i in cat.catFriends)
  {
console.log(cat.catFriends[i].activities);
console.log(cat.catFriends[i].name);
  }
   

  var totalWeight = 0;
  for (var j in cat.catFriends)
  {
 totalWeight += cat.catFriends[j].weight;
  }
 console.log(totalWeight);


  var totalActivities = [];
  totalActivities.push(cat.activities);
  for (var k in cat.catFriends)
  {
  totalActivities.push(cat.catFriends[k].activities);
  }
  console.log(totalActivities);

  for (var l in cat.catFriends)
  {
  cat.catFriends[l].activities.push('play','run');
  console.log(cat.catFriends[l].activities);
  }
  
  cat.catFriends[0].furcolor = 'grey';

