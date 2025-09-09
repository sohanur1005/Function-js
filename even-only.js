function evenOnly(num){
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {  
            console.log('Even Number:', num[i]);
            sum = sum + num[i];  
        }
    }
    return sum;  
}
// function call
const arr = [5, 73, 52, 1, 8, 3];
const result = evenOnly(arr);
console.log("Sum of Even Numbers:", result);
