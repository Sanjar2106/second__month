const nulll =document.querySelector("#null");
const left =document.querySelector("#left");
const right = document.querySelector("#right");

let SAS = 0;

left.onclick = function() {
    SAS++;
    nulll.innerHTML=SAS;
}
right.onclick = function() {
    SAS--;
    if (SAS <1){
        SAS=0;
    }
    nulll.innerHTML=SAS;

}



// snake