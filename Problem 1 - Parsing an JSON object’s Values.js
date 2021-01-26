var obj = {
    name : 'RajiniKanth', 
    age : 33, 
    hasPets : false
    };

    function printAllValues(obj) {
    var arrN = [];

    for (var i in obj){
        arrN.push(obj[i]);
    }
    return arrN;
}

console.log(printAllValues(obj));