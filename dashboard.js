// dashboard.js
import {
  getUser,
  setUser,
  getStartDate,
  setStartDate,
  getFriendlyDate
} from "./userlogs.js";

// ======= DOM ELEMENTS =======
const nameEl = document.getElementById("name");
const showNameEl = document.getElementById("message-name");
const dateCard = document.getElementById("startDate");
const alertBox = document.getElementById("welcomeMessage");
const cardNumEls = document.querySelectorAll(".card-number");

// ======= LOAD SAVED DATA =======
const saved = JSON.parse(localStorage.getItem("user") || "{}");
let savedName = saved.name ?? "";
let cardNums = saved.number ?? "";
let startDate = getStartDate();

// ======= ASK FOR USER IF NONE SAVED =======
if (!savedName) {
  const user = prompt("What is your first name?");
  if (user) {
    const number = Math.floor(Math.random() * 8989);

    savedName = user;
    cardNums = number;

    setUser(user, number);

    const now = getFriendlyDate();
    setStartDate(now);
    startDate = now;

    // Display the new card number
    cardNumEls.forEach(el => {
      el.textContent = number.toString().padStart(18, "*;;;;;;");
    });
  }
}

// ======= SHOW SAVED NAME =======
if (savedName && nameEl) {
  nameEl.textContent = savedName;
}

// ======= SHOW START DATE =======
if (startDate && dateCard) {
  dateCard.innerHTML = `Started using EizyCash on <b>${startDate}</b>`;
}

// ======= SHOW WELCOME MESSAGE =======
function showWelcomeMessage(name) {
  if (!alertBox || !showNameEl) return;

  alertBox.classList.add("show");
  showNameEl.textContent = name;

  setTimeout(() => alertBox.classList.remove("show"), 3000);
}

if (savedName) {
  showWelcomeMessage(savedName);
}

// ======= DISPLAY CARD NUMBER IF USER ALREADY SAVED =======
if (cardNums && cardNumEls.length) {
  cardNumEls.forEach(el => {
    el.textContent = cardNums.toString().padStart(18, "*");
  });
}
