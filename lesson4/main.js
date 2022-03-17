// const blocks = document.getElementsByClassName('block')
// // console.log(blocks)

// const block3 = document.getElementById('block3')
// console.log(block3.classList)

// block3.classList.add("ChangedClass");
// block3.classList.remove("ChangedClass")

// block3.onclick = () => {
//     block3.classList.toggle("active")
// }
// console.log(block3.classList)


const button = document.getElementById("button");
const input = document.getElementById("input")


button.onclick = () => {
    const div = document.createElement('div')
    const deLeteButton = document.createElement("button")
    deLeteButton.innerText = "delete"
    deLeteButton.onclick = (e) => {
        console.log(e)
    }
    div.setAttribute("class", "block");
    div.innerText = input.value;

    div.append(deLeteButton)
    document.body.append(div)
}