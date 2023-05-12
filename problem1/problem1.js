function multiplesOf3and5(number){
    let sum = 0;
    let num = 1;

    while(num < number){
        if((num % 3 === 0) || (num % 5 === 0)){
            sum += num;
        }
        num++;
    }

    return sum;
}

console.log(multiplesOf3and5(1000)); 
// output : 233168
console.log(multiplesOf3and5(49)); 
// output : 543
console.log(multiplesOf3and5(8456)); 
// output : 16687353
console.log(multiplesOf3and5(19564)); 
// output : 89301183