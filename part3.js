// easy -1 //

const movie={
    title:"Jathiratnalu",
    director:"KV Anudeep",
    release_year:"2021"
};
console.log(movie['title']);


//medium-1//

const user={name:"Donthula Supriya", email: "abc@gmail.com",age:"20"};
function printUserDetails(name, email,age)
{
    console.log(`User's name is ${name}, and they are ${age} years old.`);
}
 printUserDetails(user.name,user.email,user.age);


 //Output//
 // User's name is Donthula Supriya, and they are 20 years old.//



// Medium -3//
const users=[
    {id:"123",username:"Supriya"},
    {id:"567",username:"Nikitha"},
    {id:"234",username:"Charishma"},
    {id:"456",username:"Sindhu"}]
console.log(users.find(user=>user.id==="567"));
    

/* Output 
{ id: '567', username: 'Nikitha' }*/





