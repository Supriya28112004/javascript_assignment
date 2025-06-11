// easy-1  //
const favouritefood="carrot halwa";
console.log(favouritefood);

/* --output-- 
carrot halwa  */


//easy-2 //


let num1=28;
let num2=35;
if(num2>num1)
{
    console.log("num2 is larger than num1");
}
else if(num1<num2)
{
    console.log("num2 is smaller than num1");
}
else
{
    console.log("num1 equal to num2");
}


/* output
  num2 is larger than num1 */


// -- medium --//

const numbers=[];
for(let nums=1;nums<=20;nums++)
{
    if(nums%15==0)
    {
        console.log("FizzBuzz");
    }
     else if(nums%3==0)
    {
        console.log("Fizz");
    }
    else if(nums%5==0)
    {
        console.log("Buzz");
      
    }
    else
    {
        console.log(nums);
    }
}
/* output 
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
*/


