function getInputValueById(id) {
    const value = document.getElementById(id).value;
    const valueNum = Number(value);
    return valueNum;
}

function addClassById(id, className) {
    const element = document.getElementById(id);
    element.classList.add(className);
}

function removeClassById(id, className) {
    const element = document.getElementById(id);
    element.classList.remove(className);
}

function changeInnerTextById(id, text) {
    const element = document.getElementById(id);
    element.innerText = text; 
}