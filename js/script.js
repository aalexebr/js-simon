// creating array of non-unique rng and user number array
// rngArray = []
userArray =[]
rngArray = createRngArray(5)
setTimeout(gameFunction, 3 * 1000)
printRng(rngArray)
console.log(userArray)
console.log(rngArray)



// FUNCTIONS
// RNG and print functions
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    
  };

function printRng(array){
    for(i=0; i < array.length; i++){
        document.getElementById('print').innerHTML += array[i]
    }
    // return  document.getElementById('print').innerHTML += rng
 };
 function createRngArray(arrLength){
    let arr=[]
    for(i=0; i < arrLength; i++){
        rng= getRndInteger(1,9)
        arr.push(rng)
        // printRng()
    }
    return arr
}

// post timeout Functions
function prompNumberUser(userArrayLength){
    for(i=0; i < userArrayLength; i++){
        numUser =parseInt(prompt('enter number'));
        userArray.push(numUser)
    }
    console.log(userArray)
};
function compareArrays(arrayLength){
    count = 0
    for(i=0; i < arrayLength; i++){
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
    document.getElementById('count').innerHTML = 'result =' + count
};

function gameFunction(){
    document.getElementById('print').innerHTML = ''
    setTimeout(function(){
        prompNumberUser(5)
        compareArrays(5)
    },
    1)
    
};
