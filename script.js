// ==========================
// Part 1: Basics — Conditionals
// ==========================
// Function checks entered marks and displays grade based on conditions.
function checkGrade() {
    let marks = document.getElementById("marks").value;
    let result = "";

    if (marks >= 70) {
        result = "Grade: A";
    } else if (marks >= 50) {
        result = "Grade: B";
    } else {
        result = "Grade: Fail";
    }

    document.getElementById("result").textContent = result;
}

// ==========================
// Part 2: Functions
// ==========================
// Reusable function to calculate total price.
function calculateTotal(price, quantity) {
    return price * quantity;
}

// Function to demonstrate totals using the reusable function.
function showTotals() {
    let total1 = calculateTotal(200, 3);
    let total2 = calculateTotal(150, 2);

    document.getElementById("totalsResult").textContent =
        "Totals: " + total1 + " and " + total2;
}

// Function to toggle visibility of a secret message.
function toggleSecret() {
    let secret = document.getElementById("secret");
    secret.style.display = (secret.style.display === "none") ? "block" : "none";
}

// ==========================
// Part 3: Loops
// ==========================
// Example of looping through an array of fruits.
function listFruits() {
    let fruits = ["Apple", "Banana", "Mango", "Orange"];
    let list = document.getElementById("fruitList");
    list.innerHTML = ""; // Clear existing list

    for (let i = 0; i < fruits.length; i++) {
        let li = document.createElement("li");
        li.textContent = fruits[i];
        list.appendChild(li);
    }
}

// Example of a countdown using while loop.
function startCountdown() {
    let countdown = 5;
    let output = "";

    while (countdown > 0) {
        output += countdown + " ";
        countdown--;
    }
    output += "Go!";
    document.getElementById("countdown").textContent = output;
}

// ==========================
// Part 4: DOM Manipulation
// ==========================
// Function to change the title text dynamically.
function changeText() {
    document.getElementById("title").textContent = "You clicked the button!";
}

// Function to add new items dynamically to a list.
let counter = 1;
function addItem() {
    let li = document.createElement("li");
    li.textContent = "Dynamic Item " + counter;
    document.getElementById("dynamicList").appendChild(li);
    counter++;
}
