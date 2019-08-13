function repeat(fn, n) {
    for(let i = 0; i < n; i++) {
        fn();
    }
}

function hello() {
    console.log('hello');
}

function goodbye() {
    console.log('Goodbye world');
}

console.log(repeat(hello, 5));