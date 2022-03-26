// class dog {
//     constructor(weight, height, color) {
//         this.weight = weight;
//         this.height = height;
//         this.color = color;
//     }
// }

// const rex = new dog(40, 1.5, 'black')
// const bobik = new dog(3, 30, "yellow")

// console.log(rex);
// console.log(bobik);




// class animal {
//     constructor(type, gender, color, voiceText,) {
//         this.type = type;
//         this.gender =gender;
//         this.color = color;
//         this.voiceText = voiceText;
//     }
//     voice() {
//         console.log(this.voiceText)
//     }
// }

// class dog extends animal {
//     constructor(type, gender, color, voiceText,) {
//         super(type, gender, color, voiceText,);
//     }
// }


class dom {
    constructor(First_floor, two_floor, door,roof, window, waal, pipe) {
        this.First_floor = First_floor;
        this.two_floor = two_floor;
        this.door = door;
        this.roof = roof;
        this.window = window;
        this.waal = waal;
        this.pipe = pipe; 
    }
}


class stage extends dom{
    constructor(First_floor, two_floor, door,roof, window, waal, pipe) {
        super(First_floor, two_floor, door,roof, window, waal, pipe)
       
    }
   
}
const domm = new stage(
    "3 room",
    "4 room",
    "white",
    "green",
    "dasda",
    "cement",
    "long"
    )
console.log(domm)
