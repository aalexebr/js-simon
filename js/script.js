// creting array of non-unique rng
rngArray = []
// functions
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  function printRng(){
    return  document.getElementById('print').innerHTML += rng
 }
for(i=0; i < 5; i++){
    rng= getRndInteger(1,9)
    rngArray.push(rng)
    printRng()
}

console.log(rngArray)

