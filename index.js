let apiKey='8415a2b1ef961a86d627c372f01fceff';
let url='https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const temp=document.querySelector('.temp');
const weatherImg=document.querySelector('.weather-icon')

const search =document.querySelector('.searchBtn');
const inputField=document.querySelector('.cityName');
const error =document.querySelector('.error-message')
const humidity=document.querySelector('.humidity');
const windSpeed =document.querySelector('.wind-speed');

    async function checkWeather(city){
        let response= await fetch(url + city+ `&appid=${apiKey}`);
        let data =await response.json();
        console.log(data);
        if (inputField.value==''||response.status==404) {
            error.style.display='block';
            document.querySelector('.weather').style.display='none';
        }else{
            document.querySelector('.city').innerHTML=data.name;
            temp.innerHTML=Math.round(data.main.temp) + '°C';
            humidity.innerHTML=data.main.humidity + '%';
            windSpeed.innerHTML=data.wind.speed + 'km/h';
            if (data.weather[0].main == 'Rain') {
                weatherImg.src="images/rain.png";
            
            }
            else if (data.weather[0].main == 'Clear') {
                weatherImg.src="images/clear.png";
            
            }
            else if (data.weather[0].main == 'Clouds') {
            weatherImg.src="images/clouds.png";
            
            }
            else if (data.weather[0].main == 'Mist') {
            weatherImg.src="images/mist.png";
            
        }
            else if (data.weather[0].main == 'Drizzle') {
            weatherImg.src="images/drizzle.png";
            
        }
            else if(data.weather[0].main == 'Snow') {
            weatherImg.src="images/snow.png";
            
        }
            document.querySelector('.weather').style.display='block';
            error.style.display='none';

        }
}
search.addEventListener('click', ()=>{
    checkWeather(inputField.value);
})

