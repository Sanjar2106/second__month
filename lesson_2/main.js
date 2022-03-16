// let arr = [1, 2, 3, 4, 5, 6, 7];
// // console.log(arr[5]);
// // const mass = ["a", "b", "c", "d", "e"];
// // console.log(mass[2]);
// // let obj = {
// //     username: 'john',
// //     followers: [
// //     {
// //         username: 'john'
// //     },
// //     {
// //         username: 'Aidana',
// //         followers: [
// //             {
// //                 username: 'joe'
// //             }
// //         ]
// //     },
  
// //     ]
       
// // }
// // console.log(obj.followers[1].followers[0]);

const array = [
    {
        username: 'Jack',
        fullname: 'Jack kyrgyz'
    },
    {
        username: 'Joe',
        fullname: 'Joe kargyz'
    },
    {
        username: 'Vito',
        fullname: 'vito kazakh'
    },
];
// console.log(array[0].username, array[0].fullname)
// console.log(array[1].username, array[1].fullname)
// console.log(array[2].username, array[2].fullname)

// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }

// const obj = {
//     key1: 'h1',
//     key2: 'h2',
//     key3: 'h3',
//     key4: 'h4',
//     key5: 'h5',
//     key6: 'h6',
//     key7: 'h7',
//     key8: 'h8',
//     key9: 'h9',
//     key10: 'h10'
// }

// for(let key in obj) {
//     console.log(key + ':' + obj[key])
// }


// let i = 1
// while(i < 5){
//     console.log('Hello')
//     i++
// }


const users = [
    {
        username: 'Jake',
        salary: 500
    },
    {
        username: 'john',
        salary: 5000
    },
    {
        username: 'vito',
        salary: 1000
    }
];

const filter = [];

for(let user of users) {
    if(user.salary > 500){
        filter.push(user)
    }
}
console.log(filter)