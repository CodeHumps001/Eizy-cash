// dashboard.js
import {
  getUser,
  setUser,
  getStartDate,
  setStartDate,
  getFriendlyDate
} from "./userlogs.js";

const nameEl = document.getElementById("name");
const showName = document.getElementById("message-name");
const dateCard = document.getElementById("startDate");
const alertBox = document.getElementById("welcomeMessage");

let savedName = getUser();
let startDate = getStartDate();

if (!savedName) {
  const user = prompt("What is your first name?");
  if (user) {
    savedName = user;
    setUser(user);

    const now = getFriendlyDate();
    setStartDate(now);
    startDate = now;
  }
}

if (savedName && nameEl) {
  nameEl.textContent = savedName;
}

if (startDate && dateCard) {
  dateCard.innerHTML = `Started using EizyCash on <b>${startDate}</b>`;
}

function showWelcomeMessage(name) {
  if (!alertBox) return;
  alertBox.classList.add("show");
  showName.textContent = name;
  setTimeout(() => alertBox.classList.remove("show"), 3000);
}

if (savedName) {
  showWelcomeMessage(savedName);
}
