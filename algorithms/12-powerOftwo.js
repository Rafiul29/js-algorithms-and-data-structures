// function powerOfTwo(n) {
//   if (n <= 0) return false;

//   while (n % 2 == 0) {
//     n /= 2;
//   }
//   return n === 1;
// }

console.log(powerOfTwo(10));
console.log(powerOfTwo(1));


function powerOfTwo(n){
        if(n<1) return false;
        while(n>1){
            if(n%2 !==0) return false;
            n/=2
        }
        return true;
}