setTimeout(()=>{


    console.log("It executes after 5000 milli sec!")


}, 5000);


console.log("I execute before even!!! ");

setTimeout(()=>{


    console.log("It executes after 2000 milli sec!")


}, 2000);

/////////////////////////////////////////////

const fetchData = callback => {

    setTimeout(()=>{

        callback('Done');

    }, 1800)


}

setTimeout(()=>{

console.log("EXECUTED AFTER 2000m sec");

    fetchData(text=> {
        console.log(text);
    })


},2000);