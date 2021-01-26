/* Write a function called “transformGeekData” that transforms some set of data from one format to another. */

var arr = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];

function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    var temp = {};
    
    for(var i in arr){
        
        for(var j in arr[i]){
            temp[arr[i][j][0]] = arr[i][j][1];
        }
        tranformEmployeeList.push(temp);
        temp = {};
    }
    
    return tranformEmployeeList;
   }

console.log(transformEmployeeData(arr));