const submitBtn = document.getElementById("submit-btn");
const cityName = document.getElementById("city-name");

const cityOutput = document.getElementById("city-output");
const temp = document.getElementById("temp");
const tempStats = document.getElementById("temp-stats");

const dataHide = document.querySelector(".middle-layer");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    cityOutput.innerText = `Please write a city name`;
    dataHide.classList.add("data-hide");
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=219e680aeb5a2cab7cf3cccec33e903e`;
      const res = await fetch(url);
      const data = await res.json();
      const arrData = [data];

      cityOutput.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp.innerText = `${arrData[0].main.temp}C`;
      tempStats.innerText = arrData[0].weather[0].main;

      if (tempStats === "Clear") {
        tempStats.innerHTML =
          "<i class='fa fa-sun' style='color:#eccc68;'></i>";
      } else if (tempStats === "Clouds") {
        tempStats.innerHTML =
          "<i class='fa fa-cloud' style='color:#f1f2f6;'></i>";
      } else if (tempStats === "Rain") {
        tempStats.innerHTML =
          "<i class='fa fa-cloud-rain' style='color:#a4b0be;'></i>";
      } else {
        tempStats.innerHTML =
          "<i class='fa fa-sun' style='color:#f1f2f6;'></i>";
      }
      dataHide.classList.remove("data-hide");
    } catch {
      cityOutput.innerText = `Please check the city name`;
      dataHide.classList.add("data-hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
