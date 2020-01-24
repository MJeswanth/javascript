
// In the below object I defined string, number and arrow funcion but when I try to access the name in the functin I get undefined
const person = {

        name : 'jeswanth',
        age  : 26,
        func: () => {

            console.log("Hi I'm "+ this.name );

        }

}

person.func();

// In the below object I change arrow function to traditional function and now I am able to access name inside the function

const person2 = {

    name : 'jeswanth',
    age  : 26,
    func(){

        console.log("Hi I'm "+ this.name );

    }

}

person2.func();

