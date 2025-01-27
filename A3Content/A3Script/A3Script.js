/*  Name: Patricia Gariando
    Student #: 991 446 494
    Website: Filipino Snack Store */

document.addEventListener("DOMContentLoaded", show);

/* lettuce store firstForm in its own const variable */
const firstForm = document.forms.custDetails;

/* retrieve the order quantities from A2 and display in A3 */
function show() {
    document.getElementById("prod1").innerHTML = "Quantity: " + window.localStorage.getItem("prod1Q");
    document.getElementById("prod2").innerHTML = "Quantity: " + window.localStorage.getItem("prod2Q");
    document.getElementById("prod3").innerHTML = "Quantity: " + window.localStorage.getItem("prod3Q");
    document.getElementById("prod4").innerHTML = "Quantity: " + window.localStorage.getItem("prod4Q");
}

/* piece together the delivery address in |Summary| column */
firstForm.addEventListener("input", reveal);
function reveal() {
    document.getElementById("showEmail").innerHTML = firstForm.custEmail.value + "<br>";
    document.getElementById("showPhone").innerHTML = firstForm.custPhone.value;
    document.getElementById("showName").innerHTML = firstForm.custFName.value + " " + firstForm.custLName.value + "<br>";
    document.getElementById("showStreet").innerHTML = firstForm.custAddress.value + "<br>";
    document.getElementById("showCity").innerHTML = firstForm.custCity.value + " " + firstForm.custPostal.value;
}

/* piece together the shipping and payment methods in |Summary| column */
const getMailType = firstForm.mailType;
const getPayType = firstForm.payType;

const displayDel = function () {
    document.getElementById("showDelivery").innerHTML = "Shipping: " + getMailType.value;
};

for (const mail of getMailType) {
    mail.addEventListener("click", displayDel);
}

const displayPay = function () {
    document.getElementById("showPayment").innerHTML = "Payment via: " + getPayType.value;
};

for (const pay of getPayType) {
    pay.addEventListener("click", displayPay);
}

/* found this code from my WebDev class */
function getDiscount() {
    const getDiscount = document.getElementById("couponSelect");
    document.getElementById("showDiscount").innerHTML = getDiscount.options[getDiscount.selectedIndex].text;
}

/* Reset Button to also delete innerHTML stuff and set quantities to 0 */
const resetButton = firstForm.resetB;

resetButton.addEventListener("click", resetForm);
function resetForm() {
    window.localStorage.setItem("prod1Q", 0);
    window.localStorage.setItem("prod2Q", 0);
    window.localStorage.setItem("prod3Q", 0);
    window.localStorage.setItem("prod4Q", 0);

    document.getElementById("prod1").innerHTML = "Quantity: 0";
    document.getElementById("prod2").innerHTML = "Quantity: 0";
    document.getElementById("prod3").innerHTML = "Quantity: 0";
    document.getElementById("prod4").innerHTML = "Quantity: 0";

    document.getElementById("showEmail").innerHTML = " ";
    document.getElementById("showPhone").innerHTML = " ";
    document.getElementById("showName").innerHTML = " ";
    document.getElementById("showStreet").innerHTML = " ";
    document.getElementById("showCity").innerHTML = " ";
    document.getElementById("showDelivery").innerHTML = " ";
    document.getElementById("showPayment").innerHTML = " ";
    document.getElementById("showDiscount").innerHTML = " ";
}