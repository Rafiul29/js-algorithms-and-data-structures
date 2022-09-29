
// if the number prime or not 

function isprime(num){
    if(num<2) return false;
    for(let i=2; i<num; i++){
        if(num % i ===0) return false
    }

    return true;
}
// time complexity O(n)
console.log(isprime(10))
console.log(isprime(7))