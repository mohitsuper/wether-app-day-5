
let temp = document.querySelector(".temp");
let Location = document.querySelector(".location");
let locationName = document.querySelector(".locationName");
let weatherIcon = document.querySelector(".weatherIcon img");
let city = "";
const WetherApi = async (city)=>{
    const apikey = "cb38b1967f3dc6a3251de340a815dbd0";
    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
    const data = await url.json();
    const icon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.src = iconUrl;
    console.log(data);
    temp.textContent = data.main.temp;
    Location.textContent = data.name
}
locationName.addEventListener("keypress",()=>{
    console.log(locationName.value.trim());
    if(locationName.value.trim() != ""){
        city = locationName.value.trim();
        WetherApi(city);
    }
})
