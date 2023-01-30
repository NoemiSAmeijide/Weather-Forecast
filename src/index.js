let weather = {
  paris: {
    temp: 21.9,
    humidity: 80,
    wind: 32,
    precipitation: 67,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
    wind: 90,
    precipitation: 54,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
    wind: 13,
    precipitation: 89,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
    wind: 65,
    precipitation: 42,
  },
  moscow: {
    temp: -5,
    humidity: 20,
    wind: 62,
    precipitation: 45,
  },
};

let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let mon = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// celcius is true by default
let celcius = true;

// let city = prompt("Enter a city");
let city = "paris";
if (city === null) {
  city = "";
}
city = city.trim();
city = city.toLowerCase();
console.log(city);

// var fruita = Object.keys(weather);
// console.log(fruita);

// var a = fruita.indexOf(city);
// console.log(a);

//TIME
setInterval(myTimer, 1000);

function myTimer() {
  let now = new Date();
  //here we select the space where the timer is going
  let theTime = document.querySelector("#the-time");
  //here we put it in the html
  let timeText = `<p>${week[now.getDay()]}, ${
    mon[now.getMonth()]
  } ${now.getDate()}, ${now.getFullYear()}</p> <p>${now.getHours()} :
${(now.getMinutes() < 10 ? "0" : "") + now.getMinutes()}</p>`;
  theTime.innerHTML = timeText;
}

//CONVERTION FUNCTIONS
function convertion(event) {
  event.preventDefault();
  let originTemp = document.querySelector("#first-temp");
  let unit = document.querySelector("#unit-c");
  let result;
  let unitButton = document.querySelector("#fcf");

  if (celcius === true) {
    celcius = false;
    unit.innerHTML = "ºF";
    unitButton.innerHTML = "ºC";
    result = `${(originTemp.textContent * 9) / 5 + 32} `;
  } else {
    celcius = true;
    unit.innerHTML = "ºC";
    unitButton.innerHTML = "ºF";
    result = `${((originTemp.textContent - 32) * 5) / 9} `;
  }
  originTemp.innerHTML = Math.round(result * 10) / 10;

  // console.log(result);
  // console.log(originTemp.textContent);
}

// call to CONVERTION
let fharCel = document.querySelector("#fcf");
fharCel.addEventListener("click", convertion);

//THE ALERT (activar després)
// if (a < 0) {
//   alert(
//     `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//   );
// } else {
//   let fharen = (temper) => {
//     (temper * 9) / 5 + 32;
//   };
//   alert(
//     `It is currently ${weather[city].temp}ºC (${fharen(
//       weather[city].temp
//     )} ºF) in ${city} with a humidity of ${weather[city].humidity}%.`
//   );
// }

// CITY SEARCH FUNCTION

function newCity(event) {
  event.preventDefault();
  let theCity = document.querySelector("#new-city-value");
  let cityName = document.querySelector("#selected-city");
  let askCity = "NO CITY? 😅";
  if (theCity.value) {
    console.log(theCity.value);
    alert("searching...");
    cityName.innerHTML = theCity.value.toUpperCase();
  } else {
    console.log("value is needed");
    alert("duuude!! ask me for a city");
    cityName.innerHTML = askCity;
  }
}

//CITY NAME
//here we select and put the city name we are looking for in the html
let selCity = document.querySelector("#selected-city");
selCity.innerHTML = city.toUpperCase();
// here the call to the city form
let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", newCity);

// OTHER WEATHER DATA
let temper = document.querySelector("#first-temp");
temper.innerHTML = weather.paris.temp;
let humi = document.querySelector("#humi");
humi.innerHTML = weather.paris.humidity;
let wind = document.querySelector("#wind");
wind.innerHTML = weather.paris.wind;
let preci = document.querySelector("#preci");
preci.innerHTML = weather.paris.precipitation;
