/*
Make the keyless car code have a function called checkDriverAge(). Whenever you call this function,
you will get prompted for age. Use Function Declaration to create this function.
Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?
*/
function checkDriverAge() {
    let age = Number(prompt("What is your age?"));
    if (age < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (age > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (age === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
checkDriverAge();


/*
Create another function that does the same thing, called checkDriverAge2() using Function Expression.
*/
let checkDriverAge2 = function() {

    let age = Number(prompt("What is your age?"));
    if (age < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    }
    else if (age === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
    else{
        alert("Powering On. Enjoy the ride!");
    }
}

//calling via a variable since function has technically no name
checkDriverAge2();


/*
BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function
accept an argument of age, so that if you enter:
checkDriverAge(92);
it returns "Powering On. Enjoy the ride!"
*/
function checkDriverAge3(age) {
    if (age < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (age > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (age === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
checkDriverAge3(92);



