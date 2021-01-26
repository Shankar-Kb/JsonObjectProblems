//25. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function countPositivesSumNegatives(arr) {
var posSum = 0;
arr.forEach( elem => { if(elem>0) posSum++; });

var negSum = arr.filter( elem => elem < 0 ).reduce( (total, current) => { return total+current }); 

return [posSum, negSum];
}
var arr2 = countPositivesSumNegatives(arr);
console.log(arr2);


//24. Write a function called “removeProperty”.
function removeProperty(obj, key){
    delete obj[key];
   }
removeProperty(obj, 'name');


//23. Write a function called “addProperty”.
var obj = {
    mykey: 'value';
   };
function addProperty(obj, key){
    obj[key] = true;
    return obj;
}
addProperty(obj, 'mykey');

//22. Write a function called “getProperty”. 
var obj = {
    mykey: 'value'
   };
function getProperty(obj, key) {
    if(obj.hasOwnProperty(key) === true) return obj[key];
    else return 'NA';
   }
getProperty(obj,'mykey');


//21. Write a function called “getLastElement”.
function getLastElement(array){
    if(array.length !== 0) return array[array.length-1];
    else return -1;
   }
getLastElement([1, 2, 3, 4]);


//20. Write a function called “getNthElement”.
function getNthElement(array,n){
    return arr[n];
   }
getNthElement([1, 3, 5], 1);


//19. Create a function to calculate the distance between two points defined by their x, y coordinates
function getDistance(x1, y1, x2, y2)
{
   return Math.floor(Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2)));
}
getDistance(100, 100, 400, 300);


//18. Write a function called “isSameLength”.
function isSameLength(word1, word2){
    if(word1.length === word2.length) return true;
    else return false;
   }
isSameLength('GUVI', 'GEEK');


//17. Write a function called “getLengthOfWord”.
function getLengthOfWord(word){
    if(typeof(word)=== 'string') return word.length;
    else return -1;
   }
getLengthOfWord('GUVI');


//16. Write a function called “getFullName”.
function getFullName(firstName, lastName){
    return firstName+' '+lastName;
   }


//15. Write a function called “areBothOdd”.
function areBothOdd(num1, num2){
    if(num1 % 2 !== 0 && num2 % 2 !== 0) return true;
    else return false;
   }
areBothOdd(1, 3);

//14. Write a function called “isEven”.
function isEven(num){
    if(num % 2 === 0) return true;
    else return false;
   }
var even = isEven(5)


//13. Check if an Integer is Divisible By Five
function divisibleByFive(num) {
if(num%5 === 0) return true;
else return false;
}
var divisible = divisibleByFive(5);


//12. Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
function frames(num1,num2) {
return num1*(num2*60);
}
var fps = frames(1,2);


//11. Count the animal's legs
function CountAnimals(tur,horse,pigs) {
return tur*2 + horse*4 + pigs*4;
}
var legs = CountAnimals(2,3,5);

//10. display the remainder
function remainder(num1,num2) {
return num1%num2;
}
var res = remainder(1,3);


//9. Less Than 100?
function lessThan100(num1,num2) {
if(num1 + num2 < 100) return true;
else return false;
}
var res = lessThan100(22,15);


//8. Find the Perimeter of a Rectangle
function findPerimeter(num1,num2) {
return (num1+num2)*2;
}
var peri = findPerimeter(6,7)


//7. Convert Hours into Seconds
var hours = 1;
function hourToSeconds(hours) {
return hours*60*60;
}
var secs = hourToSeconds(hours);


//6. Create a function that takes an array and returns the first element.
var arr = [1, 2, 3];
function getFirstElement(arr) {
return arr[0];
}
var data = getFirstElement(arr);


//5. Create a function that takes a number as an argument, increments the number by +1 and returns the result.
var myint = 0;
function nextNumber(myint) {
return myint + 1;
}
var myNextint = nextNumber(myint);


//4. Create a function that takes a string and returns it as an integer.
var mystr = "5";
function toInteger(mystr) {
return +mystr;
}
var myint = toInteger(mystr);

//3. Fill in your code that takes an number minutes and converts it to seconds.
var min = 5;
function toSeconds(min) {
return min*60;
}
var secs = toSeconds(min);


//2. Write a function called “getOpposite”. Given a number, return its opposite
var num = 5;
function getOpposite(num) {

if(typeof(num) === 'number'){
    if(num === 0) return num;
    else return num*-1;
}
else return -1;
}
var result = getOpposite(num);


//1. Write a function called “addFive”. Given a number, “addFive” returns 5 added to that number.
var num = 10;
function addFive(num) { 
return num+5;
}
var result = addFive(num);