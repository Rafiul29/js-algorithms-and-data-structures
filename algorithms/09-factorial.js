//factorials
// 6!=5*4*3*2*1
//6! = 5 * (6-1)!
// n! = n* (n-1)!
// 0! =1

function factorials(n){
    let result =1;
    for(let i=1; i<=n; i++){
        result = result*i;
    }
    return result;
}
// time complexity O(n);
console.log(factorials(4))



//recursive algorithm factorials

function recursiveFact(n){
    if(n==1) return 1;
    return n* recursiveFact(n-1); // n! = n * (n - 1)
}

// time complexity O(2^n)
console.log(recursiveFact(4))
