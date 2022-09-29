
// Given a number 'n', find the first 'n' element of the fibonacci sequence.

// fibonacci(2) = [0,1]
// fibonacci(3) = [0,1,1]
// fibonacci(8) = [0,1,1,2,3,5,8,13]


function fibonacci(num){
    const fibo=[0,1]
    for(i=2; i<=num;i++){
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    return fibo;
}

//time complexity O(n)
// console.log(fibonacci(5))
// console.log(fibonacci(6))
// console.log(fibonacci(8))


// recursion fibonacci serice


// Given a number 'n', find the nth element of the fibonacci sequence.

// [0,1,1,2,3,5,8,...n]
// first two elements are 0 and 1
// 7th element is 13

function recursionFibonacci(n){
    if(n<2) return n;

    return recursionFibonacci(n-1) + recursionFibonacci(n-2)
}

console.log(recursionFibonacci(7))