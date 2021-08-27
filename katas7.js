let myArr = ["maçã", "uva", "pera"];


function newForEach (arr, myCallback) {
    for (let count = 0; count < arr.length; count++) {
        let indice = arr[i];
        myCallback(indice, count, arr);
    }
}

function myCallback (value) {
    return console.log(value);
}

let retornoForEach = myArr.forEach(myCallback);
let retornoNewForEach = newForEach(myArr, myCallback);

function newFill (arr, myCallback) {
    let output = [];
        for (let count = 0; count < arr.length; count++) {
            output.push(arr[count] = myCallback(value));
        }
    return output;
}

let retornoFill = myArr.fill(myCallback(value));
let retornoNewFill = newFill(myArr, myCallback);


function myCallbackMap (value) {
    return `${value} é muito bom!`;
}

function newMap (arr, myCallbackMap) {
    let output = [];
        for (let count = 0; count < arr.length; count++) {
            output.push(myCallbackMap(arr[count]));
        }
    return output;
}

let retornoMap = myArr.map(myCallbackMap);
let retornoNewMap = newMap(myArr, myCallbackMap);

function myCallbackSome

function newSome (myArr, myCallbackSome)

