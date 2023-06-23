// creating array of non-unique rng and user number array
rngArray = []
userArray =[]

for(i=0; i < 5; i++){
    rng= getRndInteger(1,9)
    rngArray.push(rng)
    printRng()
}
setTimeout(gameFunction, 3 * 1000)
console.log(rngArray)
console.log(userArray)




// functions

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    
  };

function printRng(){
    return  document.getElementById('print').innerHTML += rng
 };

function prompNumberUser(){
    for(i=0; i < 5; i++){
        numUser =parseInt(prompt('enter number'));
        userArray.push(numUser)
    }
    console.log(userArray)
};
function compareArrays(){
    count = 0
    for(i=0; i < 5; i++){
        // console.log('arrarng',rngArray[i],'userrarr',userArray[i])
        if(rngArray[i]==userArray[i]){
            console.log('arrarng',rngArray[i],'userrarr',userArray[i])
            count++;
            document.getElementById('print').innerHTML += ' correct '
        }
        else{
            document.getElementById('print').innerHTML += ' incorrect '
        }
    }
    document.getElementById('count').innerHTML = count
};

function gameFunction(){
    document.getElementById('print').innerHTML = ''
    prompNumberUser()
    compareArrays()
};
