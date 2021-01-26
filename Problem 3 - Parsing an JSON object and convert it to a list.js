var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
function convertListToObject(obj) {
 
 var arrN = [];
 var temp = [];

 for(var i in obj){
    
    temp.push(i);
    temp.push(obj[i]);
    arrN.push(temp);
    temp = [];
 }
 return arrN;
}

console.log(convertListToObject(obj));