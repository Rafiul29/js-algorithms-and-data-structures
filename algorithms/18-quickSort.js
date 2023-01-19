function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pointerEl = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pointerEl) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return quickSort(left).concat(pointerEl, quickSort(right));

  //return [...quickSort(left),pointerEl,...quickSort(right)]
}
console.log(quickSort([1,2,3,1,6,2,9,6,5]));
