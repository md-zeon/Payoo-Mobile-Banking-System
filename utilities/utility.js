function getInputValueById(id) {
    const value = document.getElementById(id).value;
    const valueInt = parseInt(value);
    return valueInt; 
}