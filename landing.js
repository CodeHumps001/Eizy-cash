import { getUser } from "./userlogs.js"; // <-- adjust path if needed

const btn = document.querySelectorAll('.cha')
const user = getUser(); // read from localStorage via your helper

if (user) {
  btn.forEach(b => {
    b.textContent = 'Visit Dashbaord'
  });
}