// userlogs.js
// ----- Handles localStorage & date formatting -----

export function getUser() {
  const data = localStorage.getItem("user");
  return data ? JSON.parse(data) : null;   // safely parse or return null
}

export function setUser(name, number) {
  const user = { name, number };               // bundle data
  localStorage.setItem("user", JSON.stringify(user)); // store as string
}


export function getStartDate() {
  return localStorage.getItem("startDate");
}

export function setStartDate(date) {
  localStorage.setItem("startDate", date);
}

export function getFriendlyDate() {
  const options = {
    weekday: "short",  // Tue
    year: "numeric",   // 2025
    month: "long",     // September
    day: "numeric",    // 9
    hour: "numeric",
    minute: "2-digit",
  };
  return new Date().toLocaleString("en-US", options);
}
