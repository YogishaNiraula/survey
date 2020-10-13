let sayYes = document.querySelector('#thisyes');
let box = document.querySelector('#box');
let show = false;
function displayBox() {
    if (show == false) {
        box.style.display = 'block';
        show = true;
    }
    else if (show == true) {
        box.style.display = 'none';
        show = false;
    }
}
sayYes.onclick = displayBox;