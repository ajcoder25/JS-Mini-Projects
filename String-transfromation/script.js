const inputOutput = document.querySelector('#input-Type')
const lowerCaseOutput = document.querySelector('#lowercase')
const upperCaseOutput = document.querySelector('#uppercase')


lowerCaseOutput.innerHTML = inputOutput.value.toLowerCase();

upperCaseOutput.innerHTML = inputOutput.value.toUppercase()