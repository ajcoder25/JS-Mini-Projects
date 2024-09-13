const minusEl = document.getElementById('minus');  // Corrected
const plusEl = document.getElementById('plus');    // Corrected
const resultEl = document.getElementById('Result');
const changeEl = document.getElementById('change')


let counter = 0;

const adding = () => {
    resultEl.innerText = counter;

}


///minus

// minusEl.addEventListener('click', () => {
//     const value = Number(changeEl.value)
//     counter -= value
//     adding()
//     console.log(counter)
// })


minusEl.addEventListener('click', () => {

    counter--
    adding()

    console.log(counter);



})

plusEl.addEventListener('click', () => {
    counter++
    adding()
    console.log(counter)
})


