/*  Name: Patricia Gariando
    Student #: 000 000 000
    Website: Hidden Alley Shop -Table Form */

/* load page info */
document.addEventListener("DOMContentLoaded", displayOrder);

function displayOrder() {
        let display = window.sessionStorage.getItem("list");
        const personList = JSON.parse(display);

        let table;
        let row;
        let cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9, cell10, cell11, cell12, cell13, cell14;

        for (let element of personList) {
                /* w3schools */
                table = document.getElementById("infoTable");

                /* we want to insert at the bottom of the table so it has to be -1 */
                row = table.insertRow(-1);

                /* we have 14 columns because I chose to have a lot of information */
                cell1 = row.insertCell(-1);
                cell1.innerHTML = element.email;
                cell2 = row.insertCell(-1);
                cell2.innerHTML = element.phone;
                cell3 = row.insertCell(-1);
                cell3.innerHTML = element.fname + " " + element.lname;
                cell4 = row.insertCell(-1);
                cell4.innerHTML = element.address;
                cell5 = row.insertCell(-1);
                cell5.innerHTML = element.city;
                cell6 = row.insertCell(-1);
                cell6.innerHTML = element.postal;
                cell7 = row.insertCell(-1);
                cell7.innerHTML = element.mail;
                cell8 = row.insertCell(-1);
                cell8.innerHTML = element.pay;
                cell9 = row.insertCell(-1);
                cell9.innerHTML = element.discount;
                cell10 = row.insertCell(-1);
                cell10.innerHTML = element.prod1;
                cell11 = row.insertCell(-1);
                cell11.innerHTML = element.prod2;
                cell12 = row.insertCell(-1);
                cell12.innerHTML = element.prod3;
                cell13 = row.insertCell(-1);
                cell13.innerHTML = element.prod4;
                cell14 = row.insertCell(-1);
                cell14.innerHTML = "$" + element.sum;
        }
}
