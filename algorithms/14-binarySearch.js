
function binarySearch(arr,target){
    let sortArry=arr.sort((a,b)=>a-b)
    let left=0;
    let right=sortArry.length-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(sortArry[mid]===target){
            return mid;
        }else if(target>arr[mid]){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
    return -1
}
console.log(binarySearch([2,12,23,89],89))