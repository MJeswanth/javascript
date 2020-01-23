const person = {

        name : 'jeswanth',
        age  : 26,
        func: () => {

            console.log("Hi I'm "+ this.name );

        }

}

person.func();

/////////////////////////////////////

const person2 = {

    name : 'jeswanth',
    age  : 26,
    func(){

        console.log("Hi I'm "+ this.name );

    }

}

person2.func();