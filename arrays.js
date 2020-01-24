const hobbies = ['cricket', 'chess', ];

// for (let hobby of hobbies){

//     console.log(hobby);
// }

// map will create new array but wont add to old array
console.log(hobbies.map(hobby =>  'hobby: '+hobby ))
console.log(hobbies);

//Push will add to existing array
hobbies.push("volley ball");
console.log(hobbies);