function doMath(num1, num2, operator) {
    if( operator === "+"){
        returnValue = num1 + num2;
    }
    else if( operator === "-"){
        returnValue = num1 - num2;
    }
    else if( operator === "*"){
        returnValue = num1 * num2;
    }
    else if( operator === "÷"){
        returnValue = num1 / num2;
    }
    return returnValue;
}

var n1 = parseInt(process.argv[2]);
var op = process.argv[3];
var n2 = parseInt(process.argv[4]);

var answer = doMath(n1, n2, op);
console.log(answer);