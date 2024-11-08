// Recap: Write a loop that will prompt the user 3 times 
// and store the response in an array and console.log or alert
//  the answers when the loop is done

const questions = [
    "What is your name?", 
    "What is your favorite color?", 
    "What city are you in?"
];

const answers = []

//loop
// for (let i = 0; i < questions.length; i++) {
//     const answer = prompt(questions[i])
//     answers.push(answer)
// }

// alert(answers)

// ========================

// Write a function that takes in the num Array.
// Remove all the odd numbers and multiply the rest by 3.
// Return the new array

const num = [2,5,9,10,23]

function getNum(numAry) {
    const noOdd = numAry.filter(function(number){
        return number % 2 === 0
    })

    console.log('noOdd:', noOdd)

    const multiNum = noOdd.map(function(number){
        return number*3
    })

    return multiNum
}

// console.log(getNum(num))


// ==========================

// Write a function to find the longest word in the array

const words = ["cat", "pizza", "javascript"]

const getWord = function(wordAry) {
    let currentWord = ''
    wordAry.forEach(function(word){
        if(currentWord.length < word.length){
            currentWord = word
        }
    })

    return currentWord
}

// console.log(getWord(words))

// ==============================

// Write a function that will take a word and/or sentence and remove all of the vowels
// and returns a new string no spaces (please account for upper and lower case letters, and spaces)
// ex: 'The Batman' should return 'thbtmn'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

const removeVowels = function(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const wordAry = word.toLowerCase().split('').filter(function(letter) {
        return letter !== ' '
    })
    console.log('wordAry', wordAry)

    const noVowles = wordAry.filter(function(letter) {
        return !vowels.includes(letter)
    })
    console.log('noVowels', noVowles)

    return noVowles.join('')
}

console.log(removeVowels('The Batman'))

// ===================

// Create a function that will convert Celsius to Fahrenheit and another 
// that will convert Fahrenheit to Celsius

// The function should take in a number and run the formula and return the converted temp

// To convert C to F: Divide by 5, then multiply by 9, then add 32
// To convert F to C: Deduct 32, then multiply by 5, then divide by 9

