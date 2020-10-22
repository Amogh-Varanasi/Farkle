

let rollEl = document.getElementById(`roll`)

let imgEl = document.getElementById(`img`)
let scndImgEl = document.getElementById(`scndImg`)
let thirdEl = document.getElementById(`third`)
let fourthEl = document.getElementById(`fourth`)
let fifthEl = document.getElementById(`fifth`)
let sixthEl = document.getElementById(`sixth`)
let score = 0

let rollCount = 0




function getRandomInt (max) {
    return Math.floor(Math.random() * Math.floor(max))
    
}

let diceOne = getRandomInt(6)
let diceTwo = getRandomInt(6)
let diceThree = getRandomInt(6)
let diceFour = getRandomInt(6)
let diceFive = getRandomInt(6)
let diceSix = getRandomInt(6)


function rollClicked () {

    diceOne = getRandomInt(6)
    
    if (diceOne === 0) {
        imgEl.src='die_01_42158_lg.gif'
    }
    
    if (diceOne === 1) {
        imgEl.src='die_02_42159_lg.gif'
    }

    if (diceOne === 2) {
        imgEl.src='die3.gif'
    }

    if (diceOne === 3) {
        imgEl.src='die4.png'
    }

    if (diceOne === 4) {
        imgEl.src='die5.gif'
    }

    if (diceOne === 5) {
        imgEl.src = `die6.png`
    }






    diceTwo = getRandomInt(6)

    if (diceTwo === 0) {
        scndImgEl.src='die_01_42158_lg.gif'
    }
    
    if (diceTwo === 1) {
        scndImgEl.src='die_02_42159_lg.gif'
    }

    if (diceTwo === 2) {
        scndImgEl.src='die3.gif'
    }

    if (diceTwo === 3) {
        scndImgEl.src='die4.png'
    }

    if (diceTwo === 4) {
        scndImgEl.src='die5.gif'
    }

    if (diceTwo === 5) {
        scndImgEl.src = `die6.png`
    }

    
    

    diceThree = getRandomInt(6)

    if (diceThree === 0) {
        thirdEl.src='die_01_42158_lg.gif'
    }
    
    if (diceThree === 1) {
        thirdEl.src='die_02_42159_lg.gif'
    }

    if (diceThree === 2) {
        thirdEl.src='die3.gif'
    }

    if (diceThree === 3) {
        thirdEl.src='die4.png'
    }

    if (diceThree === 4) {
        thirdEl.src='die5.gif'
    }

    if (diceThree === 5) {
        thirdEl.src = `die6.png`
    }



    diceFour = getRandomInt(6)

    if (diceFour === 0) {
        fourthEl.src='die_01_42158_lg.gif'
    }
    
    if (diceFour === 1) {
        fourthEl.src='die_02_42159_lg.gif'
    }

    if (diceFour === 2) {
        fourthEl.src='die3.gif'
    }

    if (diceFour === 3) {
        fourthEl.src='die4.png'
    }

    if (diceFour === 4) {
        fourthEl.src='die5.gif'
    }

    if (diceFour === 5) {
        fourthEl.src = `die6.png`
    }


    diceFive = getRandomInt(6)

    if (diceFive === 0) {
        fifthEl.src='die_01_42158_lg.gif'
    }
    
    if (diceFive === 1) {
        fifthEl.src='die_02_42159_lg.gif'
    }

    if (diceFive === 2) {
        fifthEl.src='die3.gif'
    }

    if (diceFive === 3) {
        fifthEl.src='die4.png'
    }

    if (diceFive === 4) {
        fifthEl.src='die5.gif'
    }

    if (diceFive === 5) {
        fifthEl.src = `die6.png`
    }
    
    

    diceSix = getRandomInt(6)

    if (diceSix === 0) {
        sixthEl.src='die_01_42158_lg.gif'
    }
    
    if (diceSix === 1) {
        sixthEl.src='die_02_42159_lg.gif'
    }

    if (diceSix === 2) {
        sixthEl.src='die3.gif'
    }

    if (diceSix === 3) {
        sixthEl.src='die4.png'
    }

    if (diceSix === 4) {
        sixthEl.src='die5.gif'
    }

    if (diceSix === 5) {
        sixthEl.src = `die6.png`
    }

    rollCount = rollCount + 1

    // if (diceOne === x || diceOne === y || diceOne === z || diceOne === a || diceOne === b) {
    //     console.log(`yes`)
    //     imgEl.classList.add(`remove`)
    // }



}


// let keepRoundOne = 0

// use this in if statement foradding in each function and if 6 then get the combo score and etc

function getOneFirstScore () {
    if (rollCount === 1) {
            if (diceOne === 0) {
                imgEl.classList.add(`remove`)
        
                score = score + 100
    
                console.log(`${score}`)
            }
    
            if (diceOne === 4) {
                imgEl.classList.add(`remove`)
        
                score = score + 50
    
                console.log(`${score}`)
            }

    }

    
}

function getTwoFirstScore () {
    if (rollCount === 1) {
            if (diceTwo === 0) {
                scndImgEl.classList.add(`remove`)
        
                score = score + 100
    
                console.log(`${score}`)
            }
    
            if (diceTwo === 4) {
                scndImgEl.classList.add(`remove`)
        
                score = score + 50
    
                console.log(`${score}`)
            }
            
    }
}


function getThreeFirstScore () {
    if (rollCount === 1) {
            if (diceThree === 0) {
                thirdEl.classList.add(`remove`)
        
                score = score + 100
    
                console.log(`${score}`)
            }
    
            if (diceThree === 4) {
                thirdEl.classList.add(`remove`)
        
                score = score + 50
    
                console.log(`${score}`)
            }
            
        }
}

function getFourFirstScore () {
    if (rollCount === 1) {
            if (diceFour === 0) {
                fourthEl.classList.add(`remove`)
        
                score = score + 100
    
                console.log(`${score}`)
            }
    
            if (diceFour === 4) {
                fourthEl.classList.add(`remove`)
        
                score = score + 50
    
                console.log(`${score}`)
            }

            
        }
}

function getFiveFirstScore () {
    if (rollCount === 1) {
            if (diceFive === 0) {
                fifthEl.classList.add(`remove`)
        
                score = score + 100
    
                console.log(`${score}`)
            }
    
            if (diceFive === 4) {
                fifthEl.classList.add(`remove`)
        
                score = score + 50
    
                console.log(`${score}`)
            }
   
        }
}

function getSixFirstScore () {
            if (diceSix === 0) {
                sixthEl.classList.add(`remove`)
        
                score = score + 100
    
                console.log(`${score}`)
            }
    
            if (diceSix === 4) {
                sixthEl.classList.add(`remove`)
        
                score = score + 50
    
                console.log(`${score}`)
            }
            
}


rollEl.addEventListener(`click`, rollClicked)


imgEl.addEventListener(`click`, getOneFirstScore)
scndImgEl.addEventListener(`click`, getTwoFirstScore)
thirdEl.addEventListener(`click`, getThreeFirstScore)
fourthEl.addEventListener(`click`, getFourFirstScore)
fifthEl.addEventListener(`click`, getFiveFirstScore)
sixthEl.addEventListener(`click`, getSixFirstScore)
