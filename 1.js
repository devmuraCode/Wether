const demo = document.querySelector(".kamron")
kamron = ``
fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=0a236acdc628a6cf30e0222e3ee9f72d')
.then(function(resp){return resp.json()})
.then(function(data){
    console.log(data);
    document.querySelector('.package-name').textContent = data.name;
    document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.features').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}'@2x.png">`;
    document.querySelector('.disclaimer').textContent = data.weather[0]
    ['description'];
})
.catch(function(){
    //catch any errors
})