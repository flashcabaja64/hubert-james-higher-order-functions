// function repeat(fn, n){
//     for(let i=0; i<n; i++){
//         fn();
//     }
// }

// console.log(repeat(function hello(){
//     console.log( "Hello world")
// }, 5));

// console.log(repeat(function goodbye(){
//     console.log("Goodbye world")
// }, 5));


// function filter(arr, fn) {
//     let newArray=[]
//     for(let i=0; i< arr.length; i++){
//         if(fn(arr[i])){
//             newArray.push(arr[i])
//         }
//     }
//     return newArray;
// }

// const myNames = ['Rob', 'James', 'Alice', 'Rick']
// const filteredNames = filter(myNames, function(name){
//     return name[0] === 'R'
// })

// console.log(filteredNames)

// function hazardWarningCreator(typeOfWarning){
//     let warningCounter = 0;
//     return function(location){
//         warningCounter++;
//         console.log(`DANGER! There is a ${typeOfWarning} hazard alert has at ${location} triggered ${warningCounter} time(s) today!`)
//     }
// }

// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// const slipperyWarn = hazardWarningCreator('Slippery Road');
// const deadEndWarning = hazardWarningCreator('Dead End Ahead');


// console.log(rocksWarning('Main St and Pacific Ave'));
// console.log(rocksWarning('Western St and Lexington Ave'));


// let turtleSteps=[[0, 0], [0,5], [-1, -3], [3, 2], [-2, 5]]
// path = turtleSteps.filter(steps => steps[0] >= 0 && steps[1] >= 0);

// totalSteps = turtleSteps.map(steps => steps[0] + steps[1])

// totalSteps.forEach((totalSteps, idx) => console.log(`Movement #${idx}: ${totalSteps} steps`))

// console.log(path)
// console.log(totalSteps)


const sentence = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'
const sentArr = sentence.split(" ");
const decoded = sentArr.reduce((letter, word) => {
    if(word.length === 3){
        return letter + ' '
    }
    else{
        return letter + word[word.length - 1].toUpperCase();
    }
}, "")

console.log(decoded)