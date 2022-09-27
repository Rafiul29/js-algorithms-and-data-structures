// what is big-o notation?
// Ans: Big o notation is one of the most fundamental tools for computer secientists to analyze the cost of an algorithm


// Find the time complexity..

// array sum
function arrSum(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum
}
console.log(arrSum([1,2,3,4,5,6]))// O(n) - linear

//two number sum 

function sum(num1,num2){
    return num1+num2;
}

console.log(sum(1,2)) // O(n) - linear



let n=10;
for(let i=0; i<=n; i++){
    console.log(i)  // O(n) -- linear 
}

let m=10;
for(let i=0; i<=m; i++){
    for(let j=0; j<=m; j++){
        console.log(i,j)  // O(n^2) - quadratic 
    }
  
}

let x=10;
for( let i=0; i<=x; i++){
    for(let j=0; j<=x; j++){
        for(let k=0; k<=x; k++){
            console.log(k) // O(n^3) -- cubic
        }
    }
}

