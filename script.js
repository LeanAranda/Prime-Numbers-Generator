var current = 1
var list =[2]
var number = document.getElementById("number")
var body = document.getElementById("body")
var listContainer = document.getElementById("listContainer")

body.addEventListener('click', function() {
    if(current != 1){
        current--
    }
    showNumber()
})

body.addEventListener('contextmenu', function() {
    current++
    showNumber()
})

function showNumber(){

    if(current > list.length){
        list.push(newPrime(list[current-2]))
    }

    number.innerHTML = list[current-1]
}

function newPrime(last){
    do{
        last++
    }while(!isPrime(last))
    
    return last
}

function isPrime(n) {
    let dividers = 0

    for (let index = 1; index <= n/2; index++) {
        if(n % index == 0){
            dividers ++;
        }
    }

    if(dividers == 1){
        return true
    }
    
    return false
}

function showList(){
    listContainer.innerHTML= list
}
