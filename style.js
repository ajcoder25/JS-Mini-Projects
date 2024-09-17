const minusButton = document.getElementById('minus');  // Corrected
const plusButton = document.getElementById('plus');    // Corrected
const resultEl = document.getElementById('Result');
const changeInput = document.getElementById('change')
const resetButton = document.getElementById('reset')


let counter = 0;

const updateResult = () => {
    resultEl.innerText = counter;

}


///minus




// minusEl.addEventListener('click', () => {

//     const changeValue = parseInt(changeInput.value) || 0

//     counter -= changeValue;

//     adding()





// })

minusButton.addEventListener('click', () => {
    const changeValue = parseInt(changeInput.value) || 0;
    counter--
    counter -= changeValue;
    updateResult();
});

plusButton.addEventListener('click', () => {
    const changeValue = parseInt(changeInput.value) || 0;
    counter++
    counter += changeValue;

    updateResult();
});


resetButton.addEventListener('click', () => {
    counter = 0;
    changeInput.value = 0;
    updateResult();
});