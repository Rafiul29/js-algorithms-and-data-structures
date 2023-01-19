function recursiveBinarySerach(arr,target,left,right){

    if(left>right) return -1
    let mid=Math.floor((left+right)/2)
    if(arr[mid]===target){
        return mid;
    }
   else if(target>arr[mid]){
      return recursiveBinarySerach(arr,target,mid+1,right);
    }else{
     return recursiveBinarySerach(arr,target,left,mid-1);
    }
    
}
console.log(recursiveBinarySerach([1,2,3,5,6,7,8],8,0,6));