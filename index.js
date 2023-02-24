function saturdayFun(summerActivity){
    if (!summerActivity){
        summerActivity = 'roller-skate'
    }
    return `This Saturday, I want to ${summerActivity}!`
};

function mondayWork(businessStuff = 'go to the office'){
    return `This Monday, I will ${businessStuff}.`
};

function wrapAdjective(razzleDazzle = '*'){
    return function (whatAmI = 'special'){
        return `You are ${razzleDazzle}${whatAmI}${razzleDazzle}!`
    };
};