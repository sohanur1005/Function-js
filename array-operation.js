function arraySum(number)
{
    let sum=0,i;
    for(i=0;i<number.length;i++)
    {
        
        sum=sum+number[i];
        
    }  
    return sum;     
    
    

    
}
const num=[10,20,30,40,50];
const result=arraySum(num);
console.log(result);    
