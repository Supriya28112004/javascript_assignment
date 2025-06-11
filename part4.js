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


//Output //
/* [ 'NIKITHA', 'SHRAVYA' ]
*/

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



// Output //
/*  Too high
    Too low
    You guessed it! */




