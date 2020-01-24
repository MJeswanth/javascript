const person = {

    name : 'jeswanth',
    age  : 26,
    func(){

        console.log("Hi I'm "+ this.name );

    }

}

const hobbies = ['Games', 'Watching movies'];


// Slice is a function which copies each element in the array one after the other.
const arrayCopied = hobbies.slice();
console.log(arrayCopied);

// if we try to copy as below we will find creating of nested array i.e., array inside array

const arrayCopied2 = [hobbies];
console.log(arrayCopied2);


//no nested array is created once we use spread operator (... is called as spread operator).
const arrayCopied3 = [...hobbies];
console.log(arrayCopied3);

// spread array if we manually declare 3 args we can pass any number of parameters but we get only 1st 3. But if we 

const arrayCopied4 = (arg1, arg2,arg3) => {

    return [arg1, arg2, arg3];

}

console.log(arrayCopied4(1,2,3,4));

const arrayCopied5 = (... args) => {

    return args;

}

console.log(arrayCopied5(1,2,3,4));
console.log(arrayCopied5(1,2,3,4,5));
