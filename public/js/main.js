const submitBtn = document.getElementById("submit-btn");
const cityName = document.getElementById("city-name");

const cityOutput = document.getElementById("city-output");
const temp = document.getElementById("temp");
const tempStats = document.getElementById("temp-stats");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    cityOutput.innerText = `Please write a city name`;
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=219e680aeb5a2cab7cf3cccec33e903e`;
      const res = await fetch(url);
      const data = await res.json();
      const arrData = [data];
      temp.innerText = arrData[0].main.temp;
      tempStats.innerText = arrData[0].weather[0].main;
      console.log(arrData[0].weather[0].main);
    } catch {
      cityOutput.innerText = `Please check the city name`;
    }
  }
};

submitBtn.addEventListener("click", getInfo);
