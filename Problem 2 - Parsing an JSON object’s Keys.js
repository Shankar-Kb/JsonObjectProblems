var obj = {
    name : 'RajiniKanth', 
    age : 33, 
    hasPets : false
    };

    function printAllKeys(obj) {
        var arrN = [];
    
            arrN.push(Object.keys(obj));
    
        return arrN;
    }
    
    console.log(printAllKeys(obj));