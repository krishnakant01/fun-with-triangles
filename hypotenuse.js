const a = document.querySelector("#a");
const b = document.querySelector("#b");
const buttonHypotenuse = document.querySelector("#btn-calc-hypotenuse");
const outputDivHypotenuse = document.querySelector("#output-div-hypo");

function calculateArea() {
    var x = Math.pow(a.value, 2) + Math.pow(b.value, 2);
    //var x = (Number(a.value)*Number(a.value)+Number(b.value)*Number(b.value));
    var hypotenuse = Math.sqrt(x).toPrecision(3);
    outputDivHypotenuse.innerText = "Hypotenuse = " + hypotenuse;

}

buttonHypotenuse.addEventListener("click", calculateArea);