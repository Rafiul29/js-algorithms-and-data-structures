

// function climbingStairCase(n){

//     if(n==1) return 1;
//     if(n==2) return 2;
//     return climbingStairCase(n-1)+climbingStairCase(n-2)
// }
// time -complexity ==== O(2^n)
// console.log(climbingStairCase(4))

function climb(n){
    const noOfWay=[1,2];
    for(let i=2; i<=n; i++){
        noOfWay[i]=noOfWay[i-1]+noOfWay[i-2]
        console.log(noOfWay)
    }
    return noOfWay[n-1]
}

console.log(climb(2))