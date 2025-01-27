/*  Name: Patricia Gariando
 Student #: 000 000 000
 Website: Filipino Snack Store */

let p1Total = 0;
let p2Total = 0;
let p3Total = 0;
let p4Total = 0;

let p1Quantity = 0;
let p2Quantity = 0;
let p3Quantity = 0;
let p4Quantity = 0;

/* Product 1: Mang Juan */
const inOne = document.getElementById("info1");
const imageOne = document.getElementById("img1");
const orderOne = document.getElementById("order1");

inOne.addEventListener("mouseover", p1Over);
inOne.addEventListener("mouseout", p1Out);
function p1Over() {
    inOne.innerHTML = "A vegetable derived snack that is an exciting vinegar flavor!";
    inOne.style.textAlign = "justify";
}
function p1Out() {
    inOne.innerHTML = "More Info";
    inOne.style.textAlign = "center";
}

imageOne.addEventListener("click", order1);
function order1() {
    let userAns = prompt("Do you wish to purchase the following product?", "Yes or No");
    if (userAns === 'Yes' || userAns === 'YES' || userAns === 'yes') {
        let quantity = prompt("How many would you like to purchase?", "0");
        if (quantity > 0) {
            p1Quantity = parseInt(p1Quantity) + parseInt(quantity); // needed to convert the strings to Int
            orderOne.innerHTML = "You have ordered: " + p1Quantity;
        } else {
            alert("You have not put in an order. Have a nice day!");
        }
    } else {
        alert("You do not wish to purchase the following product. Have a nice day!");
    }
}

/* Product 2: Stik-O */
const inTwo = document.getElementById("info2");
const imageTwo = document.getElementById("img2");
const orderTwo = document.getElementById("order2");

inTwo.addEventListener("mouseover", p2Over);
inTwo.addEventListener("mouseout", p2Out);
function p2Over() {
    inTwo.innerHTML = "Stick-O chocolate wafer sticks are deliciously crispy rolls with a light filling!";
    inTwo.style.textAlign = "justify";
}
function p2Out() {
    inTwo.innerHTML = "More Info";
    inTwo.style.textAlign = "center";
}

imageTwo.addEventListener("click", order2);
function order2() {
    let userAns = prompt("Do you wish to purchase the following product?", "Yes or No");
    if (userAns === 'Yes' || userAns === 'YES' || userAns === 'yes') {
        let quantity = prompt("How many would you like to purchase?", "0");
        if (quantity > 0) {
            p2Quantity = parseInt(p2Quantity) + parseInt(quantity); // needed to convert the strings to Int
            orderTwo.innerHTML = "You have ordered: " + p2Quantity;
        } else {
            alert("You have not put in an order. Have a nice day!");
        }
    } else {
        alert("You do not wish to purchase the following product. Have a nice day!");
    }
}

/* Product 3: Polvoron */
const inThree = document.getElementById("info3");
const imageThree = document.getElementById("img3");
const orderThree = document.getElementById("order3");

inThree.addEventListener("mouseover", p3Over);
inThree.addEventListener("mouseout", p3Out);
function p3Over() {
    inThree.innerHTML = "A shortbread cookie made with toasted flour, powdered milk, butter, and sugar!";
    inThree.style.textAlign = "justify";
}
function p3Out() {
    inThree.innerHTML = "More Info";
    inThree.style.textAlign = "center";
}

imageThree.addEventListener("click", order3);
function order3() {
    let userAns = prompt("Do you wish to purchase the following product?", "Yes or No");
    if (userAns === 'Yes' || userAns === 'YES' || userAns === 'yes') {
        let quantity = prompt("How many would you like to purchase?", "0");
        if (quantity > 0) {
            p3Quantity = parseInt(p3Quantity) + parseInt(quantity); // needed to convert the strings to Int
            orderThree.innerHTML = "You have ordered: " + p3Quantity;
        } else {
            alert("You have not put in an order. Have a nice day!");
        }
    } else {
        alert("You do not wish to purchase the following product. Have a nice day!");
    }
}

/* Product 4: Tortillos */
const inFour = document.getElementById("info4");
const imageFour = document.getElementById("img4");
const orderFour = document.getElementById("order4");

inFour.addEventListener("mouseover", p4Over);
inFour.addEventListener("mouseout", p4Out);
function p4Over() {
    inFour.innerHTML = "Tasty barbeque tortilla chips that are rolled extra thin for maximum flavour and crunch!";
    inFour.style.textAlign = "justify";
}
function p4Out() {
    inFour.innerHTML = "More Info";
    inFour.style.textAlign = "center";
}

imageFour.addEventListener("click", order4);
function order4() {
    let userAns = prompt("Do you wish to purchase the following product?", "Yes or No");
    if (userAns === 'Yes' || userAns === 'YES' || userAns === 'yes') {
        let quantity = prompt("How many would you like to purchase?", "0");
        if (quantity > 0) {
            p4Quantity = parseInt(p4Quantity) + parseInt(quantity); // needed to convert the strings to Int
            orderFour.innerHTML = "You have ordered: " + p4Quantity;
        } else {
            alert("You have not put in an order. Have a nice day!");
        }
    } else {
        alert("You do not wish to purchase the following product. Have a nice day!");
    }
}

/* retrieve all product quantities and send to A3 */
const buttonForm = document.forms["submitB"];
const submit = buttonForm.submitQ;

submit.addEventListener("click", display);

function display() {
    localStorage.setItem("prod1Q", p1Quantity);
    localStorage.setItem("prod2Q", p2Quantity);
    localStorage.setItem("prod3Q", p3Quantity);
    localStorage.setItem("prod4Q", p4Quantity);
    location.replace("../A3Content/index.html");
}
