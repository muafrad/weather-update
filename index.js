const apiKey = 'e9abf2115bdf212d71769b266dc289ca';
const apiAdd = 'https://api.openweathermap.org/data/2.5/weather?q';

// const apiUrl = `${apiAdd}=${city}&units=metric&appid=${apiKey}`;
const getTemperature = (city) => {
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e9abf2115bdf212d71769b266dc289ca`;
    const apiUrl = `${apiAdd}=${city}&units=metric&appid=${apiKey}`;
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => getUpdate(data))

}

document.getElementById('search-btn').addEventListener("click", ()=>{
  const weatherCity =  document.getElementById('search-city').value
    getTemperature(weatherCity);
})

const getUpdate = data => {
    document.getElementById("city").innerText = data.name || "Unknown City"
    document.getElementById("temp").innerText = data.main.temp
    document.getElementById("weather").innerText = data.weather[0].main
    document.getElementById("icon").setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById("search-city").value = ""
}
getTemperature('Dhaka')
