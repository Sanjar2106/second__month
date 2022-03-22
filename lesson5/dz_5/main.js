let expr=prompt("цвет?")
switch (expr) {
    case "красный":
      document.getElementsByClassName('red')[0].style.background = "red";
    break;
  case "жёлтый":
  document.getElementsByClassName('yellow')[0].style.background = "yellow";
    break;
  case "зеленый":
  document.getElementsByClassName('green')[0].style.background = "green";
    break;
  default:
    alert('такого цвета не существует')
}

// const red = document.querySelector('.red');
// const yellow = document.querySelector('.yellow')
// const green = document.querySelector('.green')
 

// red.addEventListener('click', () => {
//     red.style.background = 'red'
//     yellow.style.background = ''
//     green.style.background = ''
// })
// yellow.addEventListener('click', () => {
//     yellow.style.background = 'yellow'
//     red.style.background = ''
//     green.style.background = ''
// })
// green.addEventListener('click', () => {
//     green.style.background = 'green'
//     red.style.background = ''
//     yellow.style.background = ''
// })

