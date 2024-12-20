const isPrime = (num) =>{
    if (num<2) return false;
    for(let i =2; i<= Math.sqrt(num); i++){
        if(num%i ===0)return false;
    }
    return true;
}
const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];

  const primeArray = numbers.filter(isPrime);
  const maxNumber = Math.max(...primeArray);
  const minNumber = Math.min(...primeArray);

  const sum = primeArray.reduce((total,num) => total + num , 0);

  console.log("Prime no :", primeArray);
  console.log("Max No:", maxNumber);
  console.log("Min No :", minNumber);
  console.log("Sum of Prime NO:", sum);