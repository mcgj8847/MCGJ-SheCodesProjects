function seCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city2 = document.querySelector("#current-city");
  city2.innerHTML = searchInput.value;
}
let search = document.querySelector("#search-button");
search = addEventListener("submit", seCity);
let now = new Date();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let day = now.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let formattedDay = days[day];
function time() {
  return `${formattedDay}, ${hours}:${minutes}`;
}
let currentDate = document.querySelector("#current-date");

currentDate.innerHTML = time(currentDate);
