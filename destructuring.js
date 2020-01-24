
const person = {

    name : 'jeswanth',
    age  : 26,
    func(){

        console.log("Hi I'm "+ this.name );

    }

}

/////////////////////////////
const printname = (personinfo) => {

    console.log(personinfo.name);

}
printname(person);

///////////////////////////
const printname2 =({name}) => {

    console.log(name);

}
printname2(person);

////////////////////////////////////////////////////
const hobbies = ['Games', 'Watching movies'];
const [hobbie1, hobbie2] = hobbies;
console.log(hobbie1,',' ,hobbie2);