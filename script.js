

function namei(variable){
    console.log(variable)
}

function myName(name, callback){
   callback ('hello '  + name)
}

myName('zainab', namei)
