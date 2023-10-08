function receivesAFuntion(callback) {
    callback();
}

function receivesAFunction(callback){
    return callback();
}


function returnsANamedFunction(){
    return function namedFunction(){}
}

function returnsAnAnonymousFunction(){
    return() => {}
}