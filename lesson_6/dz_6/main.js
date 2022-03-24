// const massive =[
//     massive2 = [1,3,5,6,8,4,6,7],
//     massive3 = [5,3,10,6,8,41,6,78],
//     massive4 = [8,12,5,16,8,87,6,21],
//     massive5 = [85,95,5,54,8,4,33,7],
//     massive6 = [2,7,45,69,58,14,0,22]
// ]
// console.log([massive])

//  const obj = {
//     key1: 'value',

//     key2: 'value',

//     key3: 'value',

//     key4: 'value',

//     key5: 'value'
// }
// const obj2 = {
//     ...obj,
//     key1q: "value",
//     key2q: "value",
//     key3q: "value"
// }
// console.log(obj2)

const list = [];

const name = document.querySelector("#name")
const knopka = document.querySelector("#knopka")

function render() {
    const MainDiv = document.createElement('div');
    MainDiv.setAttribute("class", "list");
    for(let i = 0; i < list.length; i++ ) {
        const divList = document.createElement('div');
        divList.setAttribute("class", "block");
        const p = document.createElement("p");
        p.innerHTML = list[i].text;
        divList.append(p);
        MainDiv.append(divList);
    }

    const form = document.querySelector(".inner");

    document.querySelector(".list").remove();
    form.append(MainDiv)

}
knopka.onclick = function() {
    const obj = {
        id: list.length,
        text: name.value+" hello"
    }
    this.append(list);
    list.push(obj);
    render()
}