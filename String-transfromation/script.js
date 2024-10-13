const inputOutput = document.querySelector('#inputType input')
const lowerCaseOutput = document.querySelector('#lowercase span')
const upperCaseOutput = document.querySelector('#uppercase span')
const camelCaseOutput = document.querySelector('#Camelcase span')
const pascalCaseOutput = document.querySelector('#pascalcase span')
const snakeCaseOuput = document.querySelector('#snakecase span')
const kebabCaseOutput = document.querySelector('#Kebabcase span')
const trimOutput = document.querySelector('#Trim span')


//camel case Start

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


/// camel case logic Ended

//Pascal logic start here
function pascalCaseMe(string) {

    const changingToLower = string.toLowerCase()
    const usingSplit = changingToLower.split(' ')

    const usingMap = usingSplit.map((word) => {

        return word.charAt(0).toUpperCase() + word.slice(1)

    })

    return usingMap.join('')

}
//pascal logic ends here    





//Snake Case Start 

function snakeCaseMe(string) {
    // first convert into to lowercase

    const convert = string.toLowerCase()

    // convert into array by spliting it using space

    const convertingSplit = convert.split(' ')

    //Using map to iterator over each word

    const usingMap = convertingSplit.map((word) => {

        return word

    })
    return usingMap.join('_')

}


// Snake case end here


//Kebab Case Start here 

function kebabCaseMe(string) {

    const convertingToSmaller = string.toLowerCase()
    const usingSplit = convertingToSmaller.split(' ')
    const usingMap = usingSplit.map((word) => {

        return word

    })

    return usingMap.join('-')





}
// Kebab Case End here    



//Use Trim

function toTrimCase(string) {
    const changeLower = string.toLowerCase()
    const convertString = changeLower.split(' ')
    const finalArray = convertString.map((word) => {

        return word.trim()


    })

    return finalArray.join('')
}




function updatescreen() {
    lowerCaseOutput.innerHTML = inputOutput.value.toLowerCase();
    upperCaseOutput.innerHTML = inputOutput.value.toUpperCase();
    camelCaseOutput.innerHTML = toCamelCase(inputOutput.value)
    pascalCaseOutput.innerHTML = pascalCaseMe(inputOutput.value)
    snakeCaseOuput.innerHTML = snakeCaseMe(inputOutput.value)
    kebabCaseOutput.innerHTML = kebabCaseMe(inputOutput.value)
    trimOutput.innerHTML = toTrimCase(inputOutput.value)


}




updatescreen()




inputOutput.addEventListener('input', updatescreen)