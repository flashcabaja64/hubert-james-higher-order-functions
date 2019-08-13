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
//         console.log(`DANGER! There is a ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`)
//     }
// }

// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// const slipperyWarn = hazardWarningCreator('Slippery Road');
// const deadEndWarning = hazardWarningCreator('Dead End Ahead');


// console.log(rocksWarning('Main St and Pacific Ave'));
// console.log(rocksWarning('Western St and Lexington Ave'));