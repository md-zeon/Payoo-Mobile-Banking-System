document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const mobileNumber = document.getElementById("mobile-number").value;
    const pin = getInputValueById("pin");

    if (mobileNumber.length === 11) {
        if (pin === 1234) {
            window.location.href = "./main.html";
        } else {
            alert("Wrong PIN Number");
        }
    } else {
        alert("Please Enter A Valid Mobile Number");
    }
}); 