// code your solution here
function saturdayFun(doEvent ="roller-skate"){
return `This Saturday, I want to ${doEvent}!`
}

saturdayFun();

function mondayWork(event= 'go to the office'){
    return`This Monday, I will ${event}.`
}

mondayWork(); 

function wrapAdjective(symbol ="#"){
return function(adjective ="loving"){
    return `You are ${symbol}${adjective}${symbol}!`

}
}