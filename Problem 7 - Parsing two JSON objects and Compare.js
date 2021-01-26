/* Write an “assertObjectsEqual” function from scratch.
Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers). 
It is OK to use JSON.stringify().
Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name. */

var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6};

function assertObjectsEqual(actual, expected, testName){
        
    var testName = '[My Test]';
    if (JSON.stringify(expected) === JSON.stringify(actual)){
        return 'PASSED'
    }
    else return 'FAILED '+testName+' Expected'+JSON.stringify(expected)+', but got'+JSON.stringify(actual);
}

console.log(assertObjectsEqual(actual, expected));
