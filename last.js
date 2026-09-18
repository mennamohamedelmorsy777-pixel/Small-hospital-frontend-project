let body = document.getElementsByTagName("body")[0];
let sections = document.getElementsByTagName("section");
let home = document.getElementById("home")
let nav = document.getElementById("nav")
let input = document.getElementsByTagName("input")
let message = document.getElementById("message")
let is_dark = false;

function dark() {
    if (is_dark === false) {
        body.style.background = "black";
        home.style.background = "black";
        nav.style.background = "black";
        message.style.background = "black";
        message.style.border = "2px solid white"

        for (let i = 1; i < input.length; i++) {
            input[i].style.background = "black";
            input[i].style.border = "2px solid white"

        }
        for (let i = 0; i < sections.length; i++) {
            sections[i].style.background = "black";

        }
        is_dark = true;
    }
    else {

        body.style.background = "#DAECF6";
        home.style.background = "#DAECF6";
        nav.style.background = "#ffffff";
        message.style.background = "white";



        for (let i = 1; i < input.length; i++) {
            input[i].style.background = "white";

        }
        for (let i = 0; i < sections.length; i++) {
            sections[i].style.background = "#DAECF6";
        }
        is_dark = false;
    }

}



let sen = document.getElementById("sen")
let na = document.getElementById("text")
let email = document.getElementById("em")
let mass = document.getElementById("message")

function sure() {
    if (na.value == "" || email.value == "" || mass.value == "") {

        alert("something is went wrong❗")
        na.value = ""
        email.value = ""
        mass.value = ""

    }
    else {
        alert("Your message sent successfully✅")
        na.value = ""
        email.value = ""
        mass.value = ""
    }
}




let department = document.getElementById("department")
let doctors = document.getElementById("doctors")
let doctorsData = {
    emergency: ["Dr. Sara", "Dr. Ahmed"],
    Cardiology: ["Dr. mostafa", "Dr. mariam"],
    Pediatrics: ["Dr. Omar", "Dr. sara"],
    dentistry: ["Dr. Ahmed"],
    neurology: ["Dr. Omar", "Dr. mostafa"],
    Orthopedics: ["Dr. mariam", "Dr. sara"],
    Dermatology: ["Dr. mariam", "Dr. sara"]
};
department.addEventListener(("change"), function () {
    doctors.innerHTML = "<option disabled selected>Doctor</option>";
    let depatSelected = this.value;
    let departDoctor = doctorsData[depatSelected] || [];
    departDoctor.forEach(function (doctor) {
        let option = document.createElement("option")
        option.value = doctor;
        option.textContent = doctor;
        doctors.appendChild(option)
    });
})





dep = document.getElementById("department")
doc = document.getElementById("doctors")
date = document.getElementById("date")
function boo() {
    if (dep.value == "" || doc.value == "" || date.value == "") {
        alert("something is wrong❗")
         dep.selectedIndex= 0;
        doc.selectedIndex= 0;
        date.value = ""
    }
    else {

        alert("booked successfully✅")
        dep.selectedIndex= 0;
        doc.selectedIndex= 0;
        date.value = ""

    }
    
}







