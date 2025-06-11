// easy-1//
const colors=["Red", "Blue","White"];
//push at last
colors.push("pink");
console.log(colors);

// push at start
colors.unshift("black");
console.log(colors);

// print all colors

console.log(colors)


/* Output

[ 'Red', 'Blue', 'White', 'pink' ]
[ 'black', 'Red', 'Blue', 'White', 'pink' ]
[ 'black', 'Red', 'Blue', 'White', 'pink' ]  */


//medium-1//

const numbers = [10, 20, 30, 40, 50];
const increasedbyfive=numbers.map(function(num)
{
    return num+5;
});
console.log(numbers);
console.log(increasedbyfive);

//Output//
//[ 10, 20, 30, 40, 50 ]//
//[ 15, 25, 35, 45, 55 ]//


// Medium -2 //

let scores = [25, 80, 45, 95, 60, 75];
let scoreequalorabove70=scores.filter(function(num)
{
return num>=70;
});
console.log(scores);
console.log(scoreequalorabove70);


/* Output
[ 25, 80, 45, 95, 60, 75 ]
[ 80, 95, 75 ] */

// Medium -3//

let scores1 = [25, 80, 45, 95, 60, 75];
let avgofscores=scores1.reduce(function(sum,currvalue)
{  
    let avg= (sum+currvalue)/scores1.length;
    return avg;

},0);
console.log(avgofscores);

//   Output 
14.652027606310014  //






