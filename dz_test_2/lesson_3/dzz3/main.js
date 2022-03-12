function sanjar(num, num1) {
    if (num.length < num1.length){
        alert('первая меньше')
    } else if (num.length === num1.length) {
        alert ('они равны')
    } else if (num.length > num1.length){
        alert('первый больше')
    }
}

let num = [ 1123, 32, 35, 90, '2', 423423,]
let num1 = [ 11, 22, 33, 44, '2', ]
    

sanjar(num, num1)       