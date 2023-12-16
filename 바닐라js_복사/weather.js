const API_KEY ="e663a96bed567503bb717733fd80a493";



function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
fetch(url)
.then(response => response.json())
.then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
}); 
}
function onGeoError(){
    alert("can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//숫자를 장소로 바꿔줄 서비스를 이용해야
