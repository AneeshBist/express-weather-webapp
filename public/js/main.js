const submitBtn = document.getElementById("submit-btn");
const cityName = document.getElementById("city-name");

const cityOutput = document.getElementById("city-output");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    cityOutput.innerText = `Please write city name`;
  } else {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=Dehradun,in&units=metric&appid=219e680aeb5a2cab7cf3cccec33e903e`;
    const res = await fetch(url);
  }
};

submitBtn.addEventListener("click", getInfo);
