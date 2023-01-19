

function largestEle(arr){
let largeEl=arr[0]
for(let i=0; i<arr.length;i++){
    if(arr[i]>largeEl){
        largeEl=arr[i]
    }
}
return largeEl
}
//time complexity O(n)

console.log(largestEle([1,30,10,9,40,60]))