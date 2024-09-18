const formEl = document.getElementById('formChange')
const inputEl = document.getElementById('inputChange')
const resultEl = document.getElementById('result')


const randomNumber = Math.floor(Math.random() * 100 + 1)

// console.log(randomNumber)


formEl.addEventListener('submit', (e) => {

    e.preventDefault()

    const userValue = parseInt(inputEl.value)

    if (userValue > randomNumber) {
        resultEl.innerText = "Your value is too High"

        console.log('User value is high')


    }
    else if (userValue < randomNumber) {
        resultEl.innerText = "Your value is too Low"
        console.log('user value is low')
    }

    else {
        resultEl.innerText = 'Congrats! you won'
    }

})


