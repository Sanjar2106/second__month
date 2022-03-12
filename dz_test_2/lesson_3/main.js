// const a = '1';
// let b =2;

// for (let key of {}) {
//     console.log(key)
// }

// while(1 < 0){

// }

// if(a === b) {

// }

// function syaHello(){
//     console.log('Hello')
// }

// syaHello();

function getFullName(user, age){
    if (age < 18){
        console.log('close')
    } else {
        console.log ('open')
    } 
    if (user) {
        console.log(user)
    }
}

const user = {
    first_name: "John",
    Last_name: "Kia",
}

const user2 = {
    first_name: "Aktan",
    Last_name: "Super_govno"
}

const user3 = {
    first_name: "SAnjar",
    Last_name: "Jasmin"
}

getFullName(user, 13)
getFullName(user2, 15)
getFullName(user3, 23)