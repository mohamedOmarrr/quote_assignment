let allQuotes = document.querySelectorAll('.quote')
let bttn = document.querySelector('.bttn')

// function to prevent random repeat same number twice
let checkNumber
function generateRandamNumber(){
    let getRandamNumber
    do{
        getRandamNumber = Math.floor(Math.random() * allQuotes.length)
        // console.log(`your got a ${getRandamNumber}`);
        // console.log(`chech is ${checkNumber}`);
        
        
    }while(getRandamNumber === checkNumber)
        checkNumber = getRandamNumber
        // console.log(`save number ${checkNumber}`);
        return getRandamNumber
}

bttn.addEventListener(('click'), function() {
    allQuotes.forEach((quote) => {
        quote.classList.add('make-element-hidden')
    })
    allQuotes[generateRandamNumber()].classList.remove('make-element-hidden')
})



console.log(allQuotes[generateRandamNumber()])


