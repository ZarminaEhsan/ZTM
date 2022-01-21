// using this array,
let array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
array.shift();

// 2. Sort the array in order.
array.sort();

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");

// 4. Remove "Apples" from the array.  solution: array.splice(0, 1);
array.shift();

/* 5.
Sort the array in reverse order. (Not alphabetical i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
you should have at the end: ["Kiwi", "Oranges", "Blueberries"]
*/
array.reverse();

/*
Using this array: var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
ccess "Oranges".
*/
let array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
array2[1][1][0];


/*
Create an object and an array which we will use in our facebook exercise.
1. Create an object that has properties "username" and "password". Fill those values in with strings.
   in solution he didnt add this object in a variable as questions says to make object. this is new way
   for me to think like this in my uni course we always use variables and then define something in it
   solution:
   {
    username : "Fa",
    password : "had"
    };
*/
let user = {
    username : "Fa",
    password : "had"
};

// 2. Create an array which contains the object you have made above and name the array "database".
let database = [
    {
        username : "Fahad",
        password : "works"
    }
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
let newsfeed = [
    {
        username : "Pidgey",
        timeline : "I can sing."
    },
    {
        username : "Lugia",
        timeline : "I am horny."
    },
    {
        username : "Evee",
        timeline : "I am manager."
    }
];

//from video
var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIn(username, password) {
    if (username === database[0].username && password === database[0].password) {
        console.log(newsfeed);
    }
    else {
        alert("Sorry wrong username or password!");
    }
}

signIn(userNamePrompt, passwordPrompt);