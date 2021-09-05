const base = document.querySelector("#base");
const height = document.querySelector("#height");
const buttonArea = document.querySelector("#btn-calc-area");
const outputDivArea = document.querySelector("#output-div-area");

function calculateArea(){
var area = 0.5*Number(base.value)*Number(height.value);
outputDivArea.innerText = "Area = "+area;
}

buttonArea.addEventListener("click",calculateArea);