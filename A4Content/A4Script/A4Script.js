/*  Name: Patricia Gariando
 Student #: 991 446 494
 Website: Hidden Alley Shop */

const firstForm = document.forms[0];
let p1Q = 0;
let p2Q = 0;
let p3Q = 0;
let p4Q = 0;

let p1Total = 0;
let p2Total = 0;
let p3Total = 0;
let p4Total = 0;

let grandTotal = 0;

/* Product 1: Chucky */
const addButton1 = document.getElementById("addP1Btn");
const subButton1 = document.getElementById("subP1Btn");
const p1Info = document.getElementById("info1");

p1Info.addEventListener("mouseover", p1Over);
p1Info.addEventListener("mouseout", p1Out);
function p1Over() {
        p1Info.innerHTML = "Dressed in high quality clothes, do not be fooled by his dashing grin. Sold with knife.";
}
function p1Out() {
        p1Info.innerHTML = "A doll that contains the soul of a vicious serial killer. Continously hunting for it's next victim.";
}

addButton1.addEventListener("click", addProd1);
function addProd1() {
        p1Q = p1Q + 1;
        p1Total = p1Q * parseFloat(437.99);
        document.getElementById("quantityP1Btn").innerHTML = p1Q;
        document.getElementById("prod1Total").innerHTML = "$" + p1Total.toFixed(2);
        grandTotal += parseFloat(p1Total.toFixed(2));
}

subButton1.addEventListener("click", subProd1);
function subProd1() {
        if (p1Q == 0) {
                p1Q = 0;
                document.getElementById("quantityP1Btn").innerHTML = p1Q;
        } else {
                p1Q = p1Q - 1;
                p1Total = p1Q * parseFloat(437.99);
                document.getElementById("quantityP1Btn").innerHTML = p1Q;
                document.getElementById("prod1Total").innerHTML = "$" + p1Total.toFixed(2);
                grandTotal -= parseFloat(p1Total.toFixed(2));
        }
}

/* Product 2: Annabelle */
const addButton2 = document.getElementById("addP2Btn");
const subButton2 = document.getElementById("subP2Btn");
const p2Info = document.getElementById("info2");

p2Info.addEventListener("mouseover", p2Over);
p2Info.addEventListener("mouseout", p2Out);
function p2Over() {
        p2Info.innerHTML = "An ultimate must for collector's worldwide. The doll has inspired a movie franchise.";
}
function p2Out() {
        p2Info.innerHTML = "A vintage doll in a beautiful white dress. An object of beauty, now a conduit for ultimate evil.";
}

addButton2.addEventListener("click", addProd2);
function addProd2() {
        p2Q = p2Q + 1;
        p2Total = p2Q * parseFloat(1283.99);
        document.getElementById("quantityP2Btn").innerHTML = p2Q;
        document.getElementById("prod2Total").innerHTML = "$" + p2Total.toFixed(2);
        grandTotal += parseFloat(p2Total.toFixed(2));
}

subButton2.addEventListener("click", subProd2);
function subProd2() {
        if (p2Q == 0) {
                p2Q = 0;
                document.getElementById("quantityP2Btn").innerHTML = p2Q;
        } else {
                p2Q = p2Q - 1;
                p2Total = p2Q * parseFloat(1283.99);
                document.getElementById("quantityP2Btn").innerHTML = p2Q;
                document.getElementById("prod2Total").innerHTML = "$" + p2Total.toFixed(2);
                grandTotal -= parseFloat(p2Total.toFixed(2));
        }
}

/* Product 3: Freddy Fazbear */
const addButton3 = document.getElementById("addP3Btn");
const subButton3 = document.getElementById("subP3Btn");
const p3Info = document.getElementById("info3");

p3Info.addEventListener("mouseover", p3Over);
p3Info.addEventListener("mouseout", p3Out);
function p3Over() {
        p3Info.innerHTML = "All orders of the following product will be cancelled if you don't like Hawaiian pizza.";
}
function p3Out() {
        p3Info.innerHTML = "An animatronic bear who's out for children's blood and some good ol' Hawaiian pizza.";
}

addButton3.addEventListener("click", addProd3);
function addProd3() {
        p3Q = p3Q + 1;
        p3Total = p3Q * parseFloat(321.87);
        document.getElementById("quantityP3Btn").innerHTML = p3Q;
        document.getElementById("prod3Total").innerHTML = "$" + p3Total.toFixed(2);
        grandTotal += parseFloat(p3Total.toFixed(2));
}

subButton3.addEventListener("click", subProd3);
function subProd3() {
        if (p3Q == 0) {
                p3Q = 0;
                document.getElementById("quantityP3Btn").innerHTML = p3Q;
        } else {
                p3Q = p3Q - 1;
                p3Total = p3Q * parseFloat(321.87);
                document.getElementById("quantityP3Btn").innerHTML = p3Q;
                document.getElementById("prod3Total").innerHTML = "$" + p3Total.toFixed(2);
                grandTotal -= parseFloat(p3Total.toFixed(2));
        }
}

/* Product 4: Jigsaw */
const addButton4 = document.getElementById("addP4Btn");
const subButton4 = document.getElementById("subP4Btn");
const p4Info = document.getElementById("info4");

p4Info.addEventListener("mouseover", p4Over);
p4Info.addEventListener("mouseout", p4Out);
function p4Over() {
        p4Info.innerHTML = "Recommended for individuals and families, <b><i>if</i></b> they would like to play a game.";
}
function p4Out() {
        p4Info.innerHTML = "A star studded puppet used for ventriloquism. Coveniently light-weight and cursed.";
}

addButton4.addEventListener("click", addProd4);
function addProd4() {
        p4Q = p4Q + 1;
        p4Total = p4Q * parseFloat(837.22);
        document.getElementById("quantityP4Btn").innerHTML = p4Q;
        document.getElementById("prod4Total").innerHTML = "$" + p4Total.toFixed(2);
        grandTotal += parseFloat(p4Total.toFixed(2));
}

subButton4.addEventListener("click", subProd4);
function subProd4() {
        if (p4Q == 0) {
                p4Q = 0;
                document.getElementById("quantityP4Btn").innerHTML = p4Q;
        } else {
                p4Q = p4Q - 1;
                p4Total = p4Q * parseFloat(837.22);
                document.getElementById("quantityP4Btn").innerHTML = p4Q;
                document.getElementById("prod4Total").innerHTML = "$" + p4Total.toFixed(2);
                grandTotal -= parseFloat(p4Total.toFixed(2));
        }
}

/* declare variables */
const formEmail = firstForm.custEmail;
const formPhone = firstForm.custPhone;
const formFName = firstForm.custFName;
const formLName = firstForm.custLName;
const formAddy = firstForm.custAddress;
const formCity = firstForm.custCity;
const formPostal = firstForm.custPostal;
const displayBox = document.getElementById("txtDisplay");

/* the buttons */
const buttonDisplay = firstForm.displayBtn;
const buttonAdd = firstForm.addBtn;
const buttonSend = firstForm.sendBtn;
const buttonReset = firstForm.resetBtn;

/* the array list where we will store all the information */
const personList = [];

/* retain radio button and dropdown values */
const getMailType = firstForm.mailType;
const getPayType = firstForm.payType;

let mailInfo;
let payInfo;
let discountInfo;

/* RADIO BUTTONS AND DROPDOWNS */
const displayDel = function () {
        mailInfo = getMailType.value;
};

for (const mail of getMailType) {
        mail.addEventListener("click", displayDel);
}

const displayPay = function () {
        payInfo = getPayType.value;
};

for (const pay of getPayType) {
        pay.addEventListener("click", displayPay);
}

function getDiscount() {
        const getDiscount = document.getElementById("couponSelect");
        discountInfo = getDiscount.options[getDiscount.selectedIndex].text;

}
/* END OF RADIO BUTTONS AND DROPDOWNS */

/* ADD BUTTON */
const addPerson = function () /* this is a function expression*/ {
        const person = {
                email: formEmail.value, phone: formPhone.value, fname: formFName.value, lname: formLName.value,
                address: formAddy.value, city: formCity.value, postal: formPostal.value, mail: mailInfo, pay: payInfo, discount: discountInfo,
                prod1: p1Q, prod1Total: p1Total, prod2: p2Q, prod2Total: p2Total,
                prod3: p3Q, prod3Total: p3Total, prod4: p3Q, prod4Total: p4Total, sum: grandTotal
        };
        personList.push(person);
        formEmail.value = "";
        formPhone.value = "";
        formFName.value = "";
        formLName.value = "";
        formAddy.value = "";
        formCity.value = "";
        formPostal.value = "";
        p1Q = 0;
        p2Q = 0;
        p3Q = 0;
        p4Q = 0;
        p1Total = 0;
        p2Total = 0;
        p3Total = 0;
        p4Total = 0;
        grandTotal = 0;
        document.getElementById("quantityP1Btn").innerHTML = 0;
        document.getElementById("quantityP2Btn").innerHTML = 0;
        document.getElementById("quantityP3Btn").innerHTML = 0;
        document.getElementById("quantityP4Btn").innerHTML = 0;
        document.getElementById("prod1Total").innerHTML = "$0.00";
        document.getElementById("prod2Total").innerHTML = "$0.00";
        document.getElementById("prod3Total").innerHTML = "$0.00";
        document.getElementById("prod4Total").innerHTML = "$0.00";
        firstForm.mailStandard.checked = true; 
        firstForm.payCredit.checked = true;  
        firstForm.couponSelect.selectedIndex = 0;
        formEmail.focus();
};
buttonAdd.addEventListener("click", addPerson);

/* DISPLAY BUTTON */
const display = function () {
        let show = '';
        for (let element of personList) {
                show += element.email + "\n" + element.phone + "\n" + element.fname + " " + element.lname + "\n" + element.address + "\n" + element.city + " " + element.postal + "\nShipping Type: "
                        + element.mail + "\nPayment Type: " + element.pay + "\nDiscount Code: " + element.discount + "\nProduct 1: " + element.prod1 + "\t" + element.prod1Total + "\nProduct 2: "
                        + element.prod2 + "\t" + element.prod2Total + "\nProduct 3: " + element.prod3 + "\t" + element.prod3Total + "\nProduct 4: " + element.prod4 + "\t" + element.prod4Total
                        + "\nGrand Total: " + element.sum + "\n\n";
        }
        displayBox.value = show;
};
buttonDisplay.addEventListener("click", display);

/* SEND BUTTON */
const sendList = function () {
        window.sessionStorage.setItem("list", JSON.stringify(personList));
        location.replace("content/index.html");
};
buttonSend.addEventListener("click", sendList);

/* RESET BUTTON BECAUSE I NEED IT */
function resetForm() {
        formEmail.value = "";
        formPhone.value = "";
        formFName.value = "";
        formLName.value = "";
        formAddy.value = "";
        formCity.value = "";
        formPostal.value = "";
        p1Q = 0;
        p2Q = 0;
        p3Q = 0;
        p4Q = 0;
        p1Total = 0;
        p2Total = 0;
        p3Total = 0;
        p4Total = 0;
        grandTotal = 0;
        document.getElementById("quantityP1Btn").innerHTML = 0;
        document.getElementById("quantityP2Btn").innerHTML = 0;
        document.getElementById("quantityP3Btn").innerHTML = 0;
        document.getElementById("quantityP4Btn").innerHTML = 0;
        document.getElementById("prod1Total").innerHTML = "$0.00";
        document.getElementById("prod2Total").innerHTML = "$0.00";
        document.getElementById("prod3Total").innerHTML = "$0.00";
        document.getElementById("prod4Total").innerHTML = "$0.00";
        formEmail.focus();
}
buttonReset.addEventListener("click", resetForm);