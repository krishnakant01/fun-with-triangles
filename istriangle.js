const angleOne = document.querySelector("#angle-one");
const angleTwo = document.querySelector("#angle-two");
const angleThree = document.querySelector("#angle-three");
const buttonCheck = document.querySelector("#btn-check-triangle");
const outputDiv = document.querySelector("#output-div");

function checkTriangle() {
    //outputDiv.style.display = "none";
    if (Number(angleOne.value) + Number(angleTwo.value) + Number(angleThree.value) === 180) {
        outputDiv.innerText = "It is a Triangle!"
    } else {
        outputDiv.innerText = "It is not a Triangle."
    }
}

buttonCheck.addEventListener("click", checkTriangle);