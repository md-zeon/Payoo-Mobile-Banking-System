const addMoneyBox = document.getElementById("add-money-box");
const cashOutBox = document.getElementById("cash-out-box");
const transferMoneyBox = document.getElementById("transfer-money-box");
const getBonusBox = document.getElementById("get-bonus-box");
const payBillBox = document.getElementById("pay-bill-box");
const transactionBox = document.getElementById("transaction-box");

addMoneyBox.addEventListener("click", function() {
    changeInnerTextById("payment-title", "Add Money");
    addClassById("view-all", "hidden");

    removeClassById("add-money-container", "hidden");
    
    addClassById("latest-payment-container", "hidden");
    addClassById("cash-out-container", "hidden");
    addClassById("transfer-money-container", "hidden");
    addClassById("get-bonus-container", "hidden");
    addClassById("pay-bill-container", "hidden");
    addClassById("transaction-container", "hidden");
    
    addClassById("add-money-box", "selected-box");

    removeClassById("cash-out-box", "selected-box");
    removeClassById("transfer-money-box", "selected-box");
    removeClassById("get-bonus-box", "selected-box");
    removeClassById("pay-bill-box", "selected-box");
    removeClassById("transaction-box", "hidden");
});

cashOutBox.addEventListener("click", function() {
    changeInnerTextById("payment-title", "Cash Out");
    addClassById("view-all", "hidden");

    removeClassById("cash-out-container", "hidden");

    addClassById("add-money-container", "hidden");
    addClassById("latest-payment-container", "hidden");
    addClassById("transfer-money-container", "hidden");
    addClassById("get-bonus-container", "hidden");
    addClassById("pay-bill-container", "hidden");
    addClassById("transaction-container", "hidden");

    addClassById("cash-out-box", "selected-box");
    
    removeClassById("add-money-box", "selected-box");
    removeClassById("transfer-money-box", "selected-box");
    removeClassById("get-bonus-box", "selected-box");
    removeClassById("pay-bill-box", "selected-box");
    removeClassById("transaction-box", "hidden");
});

transferMoneyBox.addEventListener("click", function() {
    changeInnerTextById("payment-title", "Transfer Money");
    addClassById("view-all", "hidden");

    removeClassById("transfer-money-container", "hidden");

    addClassById("add-money-container", "hidden");
    addClassById("latest-payment-container", "hidden");
    addClassById("cash-out-container", "hidden");
    addClassById("get-bonus-container", "hidden");
    addClassById("pay-bill-container", "hidden");
    addClassById("transaction-container", "hidden");

    addClassById("transfer-money-box", "selected-box");
    
    removeClassById("add-money-box", "selected-box");
    removeClassById("cash-out-box", "selected-box");
    removeClassById("get-bonus-box", "selected-box");
    removeClassById("pay-bill-box", "selected-box");
    removeClassById("transaction-box", "hidden");
});

getBonusBox.addEventListener("click", function() {
    changeInnerTextById("payment-title", "Get Bonus");
    addClassById("view-all", "hidden");

    removeClassById("get-bonus-container", "hidden");

    addClassById("add-money-container", "hidden");
    addClassById("latest-payment-container", "hidden");
    addClassById("cash-out-container", "hidden");
    addClassById("transfer-money-container", "hidden");
    addClassById("pay-bill-container", "hidden");
    addClassById("transaction-container", "hidden");

    addClassById("get-bonus-box", "selected-box");
    
    removeClassById("add-money-box", "selected-box");
    removeClassById("cash-out-box", "selected-box");
    removeClassById("transfer-money-box", "selected-box");
    removeClassById("pay-bill-box", "selected-box");
    removeClassById("transaction-box", "hidden");
});

payBillBox.addEventListener("click", function() {
    changeInnerTextById("payment-title", "Pay Bill");
    addClassById("view-all", "hidden");

    removeClassById("pay-bill-container", "hidden");

    addClassById("add-money-container", "hidden");
    addClassById("latest-payment-container", "hidden");
    addClassById("cash-out-container", "hidden");
    addClassById("get-bonus-container", "hidden");
    addClassById("transfer-money-container", "hidden");
    addClassById("transaction-container", "hidden");

    addClassById("pay-bill-box", "selected-box");
    
    removeClassById("add-money-box", "selected-box");
    removeClassById("cash-out-box", "selected-box");
    removeClassById("transfer-money-box", "selected-box");
    removeClassById("get-bonus-box", "selected-box");
    removeClassById("transaction-box", "hidden");
});

transactionBox.addEventListener("click", function() {
    changeInnerTextById("payment-title", "transaction History");
    addClassById("view-all", "hidden");

    removeClassById("transaction-container", "hidden");

    addClassById("add-money-container", "hidden");
    addClassById("latest-payment-container", "hidden");
    addClassById("cash-out-container", "hidden");
    addClassById("get-bonus-container", "hidden");
    addClassById("pay-bill-container", "hidden");
    addClassById("transfer-money-container", "hidden");

    addClassById("transaction-box", "selected-box");
    
    removeClassById("add-money-box", "selected-box");
    removeClassById("cash-out-box", "selected-box");
    removeClassById("transfer-money-box", "selected-box");
    removeClassById("get-bonus-box", "selected-box");
    removeClassById("pay-bill-box", "selected-box");
});


const mainBalance = document.getElementById("main-balance");

document.getElementById("add-money-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const addMoneyBank = document.getElementById("add-money-bank").value;
    const addMoneyAmount = getInputValueById("add-money-input");
    const bankAccountNumber = document.getElementById("bank-account-number").value;
    const addMoneyPIN = getInputValueById("add-money-pin");
    const transactionContainer = document.getElementById("transaction-container");

    if (bankAccountNumber.length === 11) {
        if (addMoneyPIN === 1234) {
            const sum = Number(mainBalance.innerText) + addMoneyAmount;
            mainBalance.innerText = sum;
            alert(addMoneyAmount + "$ Added Successfully");
            const div = document.createElement("div");
            div.innerHTML = `
            <div class="flex justify-between items-center mx-4 bg-white rounded-xl">
                <div class="flex py-3 px-2 items-center gap-2">
                    <div class="grid place-items-center bg-[#F4F5F7] rounded-full w-11 h-11">
                        <img class="w-6" src="assets/wallet1.png" alt="wallet">
                    </div>
                    <div class="space-y-1">
                        <h2 class="text-black/70 font-semibold">${addMoneyBank} ${addMoneyAmount}$</h2>
                        <p class="text-xs text-black/60">${new Date().toLocaleString('en-GB')}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical pr-4 cursor-pointer"></i>
            </div>
            `;
            transactionContainer.appendChild(div);
        } else {
            alert("Wrong PIN");
        }
    } else {
        alert("Enter a valid Account Number");
    }

    document.getElementById("add-money-input").value = "";
});

document.getElementById("cash-out-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const cashOutAmount = getInputValueById("cash-out-amount");
    const agentNumber = document.getElementById("agent-number").value;
    const cashOutPIN = getInputValueById("cash-out-pin");
    const transactionContainer = document.getElementById("transaction-container");

    if (agentNumber.length === 11) {
        if (cashOutPIN === 1234) {
            const sub = Number(mainBalance.innerText) - cashOutAmount;
            mainBalance.innerText = sub;
            alert(cashOutAmount + "$ WithDraw Successful");
            const div = document.createElement("div");
            div.innerHTML = `
            <div class="flex justify-between items-center mx-4 bg-white rounded-xl">
                <div class="flex py-3 px-2 items-center gap-2">
                    <div class="grid place-items-center bg-[#F4F5F7] rounded-full w-11 h-11">
                        <img class="w-6" src="assets/wallet1.png" alt="wallet">
                    </div>
                    <div class="space-y-1">
                        <h2 class="text-black/70 font-semibold">Cash Out ${cashOutAmount}$</h2>
                        <p class="text-xs text-black/60">${new Date().toLocaleString('en-GB')}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical pr-4 cursor-pointer"></i>
            </div>
            `;
            transactionContainer.appendChild(div);
        } else {
            alert("Wrong PIN");
        }
    } else {
        alert("Enter a valid Account Number");
    }

    document.getElementById("cash-out-amount").value = "";
});

document.getElementById("send-money-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const moneyAmount = getInputValueById("transfer-amount");
    const accountNumber = document.getElementById("user-account").value;
    const PIN = getInputValueById("transfer-pin");
    const transactionContainer = document.getElementById("transaction-container");

    if (accountNumber.length === 11) {
        if (PIN === 1234) {
            const sub = Number(mainBalance.innerText) - moneyAmount;
            mainBalance.innerText = sub;
            alert(moneyAmount + "$ Money Transfer Successful");
            const div = document.createElement("div");
            div.innerHTML = `
            <div class="flex justify-between items-center mx-4 bg-white rounded-xl">
                <div class="flex py-3 px-2 items-center gap-2">
                    <div class="grid place-items-center bg-[#F4F5F7] rounded-full w-11 h-11">
                        <img class="w-6" src="assets/wallet1.png" alt="wallet">
                    </div>
                    <div class="space-y-1">
                        <h2 class="text-black/70 font-semibold">Money Transfer ${moneyAmount}$</h2>
                        <p class="text-xs text-black/60">${new Date().toLocaleString('en-GB')}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical pr-4 cursor-pointer"></i>
            </div>
            `;
            transactionContainer.appendChild(div);
        } else {
            alert("Wrong PIN");
        }
    } else {
        alert("Enter a valid Account Number");
    }

    document.getElementById("transfer-amount").value = "";
});

document.getElementById("get-bonus-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const couponCode = document.getElementById("coupon-code").value;

    if (couponCode === "GIFT30") {
        alert("Congratulations, You got a 30$ off coupon");
    } else {
        alert("Invalid Coupon Code");
    }
})

document.getElementById("pay-bill-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const payBillOption = document.getElementById("pay-bill-option").value;
    const moneyAmount = getInputValueById("pay-bill-amount");
    const accountNumber = document.getElementById("bill-account-number").value;
    const PIN = getInputValueById("pay-bill-pin");
    const transactionContainer = document.getElementById("transaction-container");

    if (accountNumber.length === 11) {
        if (PIN === 1234) {
            const sub = Number(mainBalance.innerText) - moneyAmount;
            mainBalance.innerText = sub;
            alert(moneyAmount + "$ " + payBillOption + " Payment Successful");
            const div = document.createElement("div");
            div.innerHTML = `
            <div class="flex justify-between items-center mx-4 bg-white rounded-xl">
                <div class="flex py-3 px-2 items-center gap-2">
                    <div class="grid place-items-center bg-[#F4F5F7] rounded-full w-11 h-11">
                        <img class="w-6" src="assets/wallet1.png" alt="wallet">
                    </div>
                    <div class="space-y-1">
                        <h2 class="text-black/70 font-semibold">${payBillOption}</h2>
                        <p class="text-xs text-black/60">${new Date().toLocaleString('en-GB')}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical pr-4 cursor-pointer"></i>
            </div>
            `;
            transactionContainer.appendChild(div);
        } else {
            alert("Wrong PIN");
        }
    } else {
        alert("Enter a valid Account Number");
    }

    document.getElementById("pay-bill-amount").value = "";
});

