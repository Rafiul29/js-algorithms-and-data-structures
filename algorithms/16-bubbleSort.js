function bubbleSort(arr){
for(let i=0; i<arr.length;i++){
    for(let j=0; j<arr.length-i;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}
return arr
}
console.log(bubbleSort([1,2,1,7,4,3,9,5,-1]))