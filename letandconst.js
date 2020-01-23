const name = 'M Jeswanth';
let age = '26';
const hobbies =  true;

//name = "Jeswanth"; //throws an error as it is const and resigning here
age = 27;

function userinfo(hasHobbies){

    return 'My name is "'+name+'" of age '+age+ ' with hobbies '+hasHobbies;
    
    }
    
    console.log(userinfo('cricket, chess.'));