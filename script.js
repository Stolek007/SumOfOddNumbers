function rowSumOddNumbers(n) {
  let total = 0;
  for (let i = 0; i < n; i++){
   total += i; 
 }
 let firstNum = 2 * total + 1;
 
 let sum = 0;
 for (let j = 0; j < n; j++){
   sum += firstNum;
   firstNum += 2;
 }
 return sum;
}
