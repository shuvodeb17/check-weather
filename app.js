const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function () {
    const userInput = document.getElementById('user-input').value;

    // featch api
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=e076cbdd17e1c6d2304dda906b948539`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const cityName = data.name;
        const temp = data.main.temp;
        const temperature = temp - 273.15;
        const desp = data.weather[0].description;
        document.getElementById('city-name').innerHTML = cityName;
        document.getElementById('temp').innerHTML = temperature.toFixed(2);
        document.getElementById('desp').innerHTML = desp;
    })
    .catch(err => alert('Please enter correct city name'))
})

