const sumAll = function(input1, input2) {
    let bigNum = (input1 > input2) ? input1 : input2;
    let smallNum = (input1 < input2) ? input1 : input2;
    let sum = 0; 

    if(Number.isInteger(input1) && Number.isInteger(input2) && bigNum > 0 && smallNum > 0){
        for(let i = smallNum; i<=bigNum; i++){
        sum+=i;
    }

    return sum; 
    }
    else return "ERROR"; 
    
};

// Do not edit below this line
module.exports = sumAll;
