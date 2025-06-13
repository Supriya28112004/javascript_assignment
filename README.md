<pre>
 ## part1 ##
[Easy] Declare a variable named favoriteFood using const and assign it a string value of your favorite food. Print it to the console.
// easy-1  //
const favouritefood="carrot halwa";
console.log(favouritefood);
 ## Output ##

 <img width="338" alt="image" src="https://github.com/user-attachments/assets/33b0d7ad-2d5f-4ee6-abfe-2f0d1d7c1ccd" />

[Easy] Create two variables, numA and numB, and assign them number values. Write an if/else statement to print which number is larger or if they are equal.
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

## Output ##

<img width="145" alt="image" src="https://github.com/user-attachments/assets/1e9e4733-bcb0-428e-ae78-a6c5c685dad9" />

[Medium] Write a for loop that prints the numbers from 1 to 20. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

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

## Output ##


<img width="241" alt="image" src="https://github.com/user-attachments/assets/276db2e3-822e-40d0-a4d4-ddd2baca1745" />

## Part-2 arrays ## 
**[Easy]** Create an array named `colors` with three of your favorite colors.
    - Add a fourth color to the end of the array.
    - Add a new color to the beginning of the array.
    - Print the final array to the console.
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
## Output ##

<img width="344" alt="image" src="https://github.com/user-attachments/assets/74b94c66-5f9e-4c0a-9e5c-b0a64add8522" />

[Medium] -1
Given the array let numbers = [10, 20, 30, 40, 50];, use the map method to create a new array where each number is increased by 5.
//medium-1//

const numbers = [10, 20, 30, 40, 50];
const increasedbyfive=numbers.map(function(num)
{
    return num+5;
});
console.log(numbers);
console.log(increasedbyfive);
## Output ##
<img width="153" alt="image" src="https://github.com/user-attachments/assets/7e69ff7d-8c7c-44d9-a7fe-f861afc63413" />
[Medium] -2
Given the array let scores = [25, 80, 45, 95, 60, 75];, use the filter method to create a new array containing only the scores that are 70 or higher.
let scores = [25, 80, 45, 95, 60, 75];
let scoreequalorabove70=scores.filter(function(num)
{
return num>=70;
});
console.log(scores);
console.log(scoreequalorabove70);
## Output ##
<img width="181" alt="image" src="https://github.com/user-attachments/assets/fa98765a-496e-4725-a187-1171f179a27d" />

[Hard]
Use the reduce method on the scores array from the previous question to calculate the average score. (Hint: sum all scores and then divide by the number of scores).
// Medium -3//

let scores1 = [25, 80, 45, 95, 60, 75];
let avgofscores=scores1.reduce(function(sum,currvalue)
{  
  return  sum+currvalue;
},0);
console.log(avgofscores/scores1.length);
## output ##
<img width="157" alt="image" src="https://github.com/user-attachments/assets/c362af33-fdf0-4e2e-84cb-6656af00c915" />

## part-3 ##
[Easy] -1
Create an object named movie with properties for title, director, and releaseYear. Print the title of the movie to the console.
// easy -1 //
const movie={
    title:"Jathiratnalu",
    director:"KV Anudeep",
    release_year:"2021"
};
console.log(movie['title']);

<img width="339" alt="image" src="https://github.com/user-attachments/assets/e60c439c-de51-4052-bd25-af03f27131f8" />
[Medium]-1
Write a function called printUserDetails that takes a user object as an argument. The user object will have name, email, and age properties. The function should use object destructuring in its parameters to print a string like: "User's name is [NAME], and they are [AGE] years old."
//medium-1//

const user={name:"Donthula Supriya", email: "abc@gmail.com",age:"20"};
function printUserDetails(name, email,age)
{
    console.log(`User's name is ${name}, and they are ${age} years old.`);
}
 printUserDetails(user.name,user.email,user.age);
## Output ##

<img width="340" alt="image" src="https://github.com/user-attachments/assets/fab8893b-8da1-4d11-a05e-6367940ce5f0" />

[Medium] -2
Create an array of user objects. Each object should have an id and a username. Use the find method to find the user with a specific id.
const users=[
    {id:"123",username:"Supriya"},
    {id:"567",username:"Nikitha"},
    {id:"234",username:"Charishma"},
    {id:"456",username:"Sindhu"}]
console.log(users.find(user=>user.id==="567"));
## Output ##
<img width="212" alt="image" src="https://github.com/user-attachments/assets/618eb743-f313-4fc0-9b22-a4899976b75d" />

## Part-4 ##
**[Hard]** -1
Write a function called `getHighAchievers`. This function should accept two arguments: an array of student objects and a `passingScore` number. Each student object will look like this: `{ id: 1, name: 'Alice', score: 85 }`.
- The function should **filter** the students to get only those with a score greater than or equal to `passingScore`.
- It should then use **map** to return a new array containing only the names of the high-achieving students, in all uppercase letters.
- Example: `getHighAchievers(students, 80)` might return `["ALICE", "BOB"]`.
// hard -1//
students=[
    { id: 1, name: 'Supriya', score: 85 },
    { id: 2, name: 'Nikitha', score: 96 },
    { id: 3, name: 'Sindhu', score: 80 },
    { id: 1, name: 'Shravya', score: 100 }
]
function getHighAchievers(students,passingscore)
{
     const scoregreaterthanorequal=students.filter(function(scores)
    {
        return scores.score>=passingscore
    });
    const  highachievingstudents =scoregreaterthanorequal.map(function(scores)
{
    return scores.name.toUpperCase();
});


//return scoregreaterthanorequal;
return highachievingstudents;
}

const ans=getHighAchievers(students,90);
console.log(ans);

## Output ##
<img width="338" alt="image" src="https://github.com/user-attachments/assets/b787208f-6efc-45de-86eb-46d83bb457da" />

**[Hard]** -2
Write a function called `createGame`.
- This function should not take any arguments.
- Inside `createGame`, create a "private" variable called `secretNumber` and assign it a random number between 1 and 10.
- `createGame` should **return another function**. Let's call this inner function `guess`.
- The returned `guess` function should accept one argument, a number.
- When you call `guess`, it should compare the guessed number to the `secretNumber` it remembers (this is a **closure**!).
- It should log "You guessed it!", "Too high!", or "Too low!".
- Test it:
//hard -2//
function createGame()
{
    let secretnumber=9;
    return function(guess)
    {
        if(guess==secretnumber)
        {
            return "You guessed it!";
        }
        else if(guess>secretnumber)
        {
            return "Too high";
        }
        else
        {
          return "Too low";
        }
    }

}
const guessednumber=createGame();
console.log(guessednumber(20));
console.log(guessednumber(1));
console.log(guessednumber(9));
## Output ##
<img width="102" alt="image" src="https://github.com/user-attachments/assets/6d8dcab4-84c4-4d4f-9976-636c04817671" />

</pre> 




















