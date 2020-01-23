const name = 'M Jeswanth';
let age = '26';
const hobbies =  true;

// the part on the right side of = is called as anonymous function
// implicitly it is called with the name left side of = by assigning it.
const arrowfunctions = function (userName, userAge, userHobbies){


    return 'My name is "'+userName+'" of age '+userAge+ ' with hobbies '+userHobbies;

}

console.log(arrowfunctions(name, age, 'cricket, chess'));

// Now lets remove function key word and it will work same way when you add => symbol

const arrowfunctions2 = (userName, userAge, userHobbies) =>{


    return 'My name is "'+userName+'" of age '+userAge+ ' with hobbies '+userHobbies;

}

console.log(arrowfunctions2(name, age, 'cricket, chess, volleyball'));

///////////////////////////////////////////

const sum = (a,b) => {

    return a+b;
}

console.log(sum(5,4));

////////////////////////////////////////////

const sum2 = (a,b) => a+b;
console.log(sum2(5,6));

//////////////////////


const incrementbyone = a => a+1;

console.log(incrementbyone(2));


////////////////////////////

const addvalue = () => 2+3;
console.log(addvalue());



////////////////////////////

const addvaluea = (a) => 2+a;
console.log(addvaluea(5));