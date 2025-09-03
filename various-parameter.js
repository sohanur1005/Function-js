function check(str){
    const size =str.length;
    console.log(str,size)
    if(size%2==0)
    {
        console.log("Even Size")
    }
    else{
        console.log("Odd Size")
    }
}
check("Dhaka")
check("Faka")



// double or tri
function doubleOrTripple(number,doDouble)
{
    if(doDouble==true)
    {
        const result=number*2;
        return result;
    }
    else{
        const result=number*3;
         return result;
    }
}
const output1=doubleOrTripple(5,true);
const output2=doubleOrTripple(5,false);
console.log(output1)
console.log(output2)