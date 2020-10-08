

let rollEl = document.getElementById(`roll`)

let imgEl = document.getElementById(`img`)
let scndImgEl = document.getElementById(`scndImg`)

function getRandomInt (max) {
    return Math.floor(Math.random() * Math.floor(max))
    
}

function rollClicked () {

    let i = getRandomInt(6)
    console.log(`i is ${i}`)

    // console.log(getRandomInt(3))
    // console.log(getRandomInt(1))
    // console.log(Math.random())
    
    if (i === 0) {
        imgEl.src='die_01_42158_lg.gif'
    }
    
    if (i === 1) {
        imgEl.src='die_02_42159_lg.gif'
    }

    if (i === 2) {
        imgEl.src='die3.gif'
    }

    if (i === 3) {
        imgEl.src='die4.png'
    }

    if (i === 4) {
        imgEl.src='die5.gif'
    }

    if (i === 5) {
        imgEl.src = `die6.png`
    }






    let x = getRandomInt(6)
    console.log(`x is ${x}`)

    if (x === 0) {
        console.log(`yee`)
        scndImgEl.src='die_01_42158_lg.gif'
    }
    
    if (x === 1) {
        console.log(`ye`)
        scndImgEl.src='die_02_42159_lg.gif'
    }

    if (x === 2) {
        console.log(`yaw`)
        scndImgEl.src='die3.gif'
    }

    if (x === 3) {
        console.log(`yo`)
        scndImgEl.src='die4.png'
    }

    if (x === 4) {
        console.log(`yup`)
        scndImgEl.src='die5.gif'
    }

    if (x === 5) {
        console.log(`ya`)
        scndImgEl.src = `die6.png`
    }
}




rollEl.addEventListener(`click`, rollClicked)


