const inputOutput = document.querySelector('#input-Type input')
const lowerCaseOutput = document.querySelector('#lowercase span')
const upperCaseOutput = document.querySelector('#uppercase span')


//pascal case 

function capitalizeString(str) {

    return str[0].toUpperCase() + str.slice(1, str.length)
}


function toCamelCase(string) {
    const changeLower = string.toLowerCase()
    const convertString = changeLower.split(' ')
    const finalArray = convertString.map((word, i) => {

        if (i === 0) return word

        return capitalizeString(word)
    })

    return finalArray.join('')
}

inputOutput.addEventListener('input', (e) => {
    lowerCaseOutput.innerText = inputOutput.value.toLowerCase();
    upperCaseOutput.innerText = inputOutput.value.toUpperCase();


})