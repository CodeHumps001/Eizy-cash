// userlogs.js
// ----- Handles localStorage & date formatting -----

export function getUser() {
  return localStorage.getItem("user");
}

export function setUser(name) {
  localStorage.setItem("user", name);
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
