

// =========== Object ================= 
const names = {
    firstPerson: 'Daniel',
    secondPerson: 'Chidera',
    thirdPerson: 'tobechukwu',
    fourthPerson: '2 Pack ',
    fifthPerson: 'kelechi',
    lastPerson : 'Joseph'
}


console.log(names.firstPerson)


const humams = {
    males: ['Obi', 'JOnh', 'Tobe'],
    females: ['Ada', 'Gift', 'Chidera'],
    boy: 'blaik', 
    girl: 'Nene',
    women: {
        mum: 'Tobe Mummuy', 
        Joe:'Joe Sister', 
        blaik: [true, 'grace', {animal: 'goat'} ]
    }
}

console.log(humams.females[1])
console.log(humams.males[2])

console.log(humams.boy)
console.log(humams['boy'])

console.log(humams.women.blaik[2].animal)