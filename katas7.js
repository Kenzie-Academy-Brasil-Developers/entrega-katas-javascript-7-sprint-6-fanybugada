let myArr = ["maçã", "uva", "pera"];


function newForEach (arr, myCallback) {
    for (let count = 0; count < arr.length; count++) {
        let indice = arr[count];
        myCallback(indice, count, arr);
    }
}

function myCallback (value) {
    // return console.log(value);
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

function myCallbackSome (item, index) {
    if (item > 10) {
        return true;
    }
    return false;
}

function newSome (myArr, myCallbackSome) {
    let output = false;
        for (let count = 0; count < myArr.length; count++) {
            let position = myArr[count];
            output = myCallbackSome(position, count);
        }
    return output;
}

let retornoSome = myArr.some(myCallbackSome);
let retornoNewSome = newSome(myArr, myCallbackSome);


function myCallbackFind (item, index) {
    if (item > 10) {
        return item;
    }
}

function newFind (myArr, myCallbackFind) {
    for (let count = 0; count < myArr.length; count++) {
        let index = myArr[count];

        if (myCallbackFind(index, count, myArr)) {
            return index;
        }
    }
    return undefined;
}

let retornoFind = myArr.find(myCallbackFind);
let retornoNewFind = newFind(myArr, myCallbackFind);

function myCallbackFindIndex (item, index) {
    if (item > 10) {
        return index;
    } 
return -1;
}

function newFindIndex (myArr, myCallbackFindIndex) {
    for (let count = 0; count < myArr.length; count++) {
        let position = myArr[count];
        
        if (myCallbackFindIndex(position, count, myArr)) {
            return count;
        }
    }
return undefined;
}

let retornoFindIndex = myArr.findIndex(myCallbackFindIndex);
let retornoNewFindIndex = newFindIndex(myCallbackFindIndex);

function myCallbackEvery (item, index) {
    if (item > 5) {
        return true;
    }
    return false;
}

function newEvery (myArr, myCallbackEvery) {
    for (let count = 0; count < myArr.length; count++) {
        let index = myArr[count];

        if (!myCallbackEvery(index, count, myArr)) {
            return false;
        }
    }
    return true;
}

let retornoEvery = myArr.every(myCallbackEvery);
let retornoNewEvery = newEvery(myArr, myCallbackEvery);


function myCallbackFIlter (item, index) {
    if (item > 10) {
        return item;
    }
}

function newFilter (myArr, myCallbackFIlter) {
    let output = [];
    
    for (let count = 0; count < myArr.length; count++) {
        let position = myArr[count];
            
        if (myCallbackFIlter(position, count, myArr)) {
            output.push(position);
        }
    }

    if (output.length === 0) {
        return undefined;
    }
return output;
}

// let retornoFilter =
// let retornoNewFIlter = 

function myCallbackConcat (x, y) {
    for (let count = 0; count < y.length; count++) {
        let concat = y[count];
        x.push(concat);
    } // ?
return x;
}

function newConcat (myArr, newArr, myCallbackConcat) {
    let output = [];

    for (let count = 0; count < myArr.length; count++) {
        let position = myArr[count];
        output.push(position);
    }

    let outputConcat = myCallbackConcat(output, newArr);
return outputConcat;
}

// let retornoConcat =
// let retornoNewConcat =


function newIncludes (myArr, item) {
    for (let count = 0; count < myArr.length; count++) {
        let position = myArr[count];

        if (position === item) {
            return true;
        }
    }
    return false;
}

function newIndexOf (myArr, item, index = 0) {
    for (let count = 0; count < myArr.length; count++) {
        let position = myArr[count];

        if (position === item && index > 1 && index !== 0) {
            return count - index;
        }

        if (position === item) {
            return count;
        }
    }
}// is that right?

function newJoin (myArr) {
    let output = "";
    let arrLength = myArr.length;

    if (arrLength == 0) {
        return output;
    }

    for (let count = 0; count < myArr.length; count++) {
        let position = myArr[count];
        output += position + ",";
    }
return output;
}


function myCallbackReduce (x, y, index) {
    return x + y;
}

function newReduce (myArr, myCallbackReduce, index = 0) {
    let output = index;

    for (let count = 0; count < myArr.length; count++) {
        let position = myArr[count];
        output = myCallbackReduce(output, position);
    }
return output;
}

