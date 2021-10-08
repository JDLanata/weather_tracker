console.log("hello there")
var apiKey = "a94854f2d3d0f7762987fe81bca50927";
var city;
var lat;
var lon;
// var searchArea = $("#searchArea");
var searchBtn = $('#searchBtn');
var lastSearch = $('#lastSearch');
var weatherHistory = JSON.parse(localStorage.getItem('weather')) || []
////today's weather window
var todayDate = $('#todayDate');
var todayName = $('#todayName');
var todayTemp = $('#todayTemp');
var todayWind = $('#todayWind');
var todayHumid = $('#todayHumid');
var todayUv = $('#todayUv');
///five day forcast cards
var cardName;
var cardTemp;
var cardWind;
var cardHumid;
var cardUv;



// var fiveDayApi = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+apiKey;



searchBtn.click(function (event) {
  event.preventDefault();
  city = $("#searchArea").val();
  todayName.text(city)
  todayDate.text(moment().format("MM/DD/YYYY"))
  console.log(city);
  let newWeather = weatherHistory.push(city)
  console.log(newWeather)
  localStorage.setItem("weather", JSON.stringify(weatherHistory));

  cityFind();
  searchHist();
  // fiveDay();
})
// var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+$("#searchArea").val()+"&appid="+apiKey;
// var apiUrl = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey

function cityFind() {

  // console.log(apiUrl)
  console.log(city);
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
    .then(function (response) {

      console.log(response);
      return response.json();
    })
    .then(function (data) {
      lat = data.coord.lat;
      lon = data.coord.lon;
      // console.log(lat)
      // console.log(lon)

      console.log(data);
      cityData()
    });
}


function cityData() {
  console.log(lon + lat);
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey)

    .then(function (response) {

      console.log(response);
      return response.json();
    })
    .then(function (data) {

      console.log(data);
      todayTemp.text('Temp: ' + data.current.temp)
      todayWind.text('Wind: ' + data.current.wind_speed)
      todayHumid.text('Humidity: ' + data.current.humidity)
      todayUv.text('UV-Index: ' + data.current.uvi)


    });

}
function cardData() {
  console.log(lon + lat);
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey)

    .then(function (response) {

      console.log(response);
      return response.json();
    })
    .then(function (data) {

      console.log(data);
      cardTemp.text('Temp: ' + data.current.temp)
      cardWind.text('Wind: ' + data.current.wind_speed)
      cardHumid.text('Humidity: ' + data.current.humidity)
      cardUv.text('UV-Index: ' + data.current.uvi)


    });

}




////Store search History in localstorage data



function searchHist() {

  var hitsButton = JSON.parse(localStorage.getItem('weather'))

  console.log(hitsButton)
hitsButton.forEach(cityName => {
  
  cityName = document.createElement('button')

  $(cityName).attr('class', 'button is-info is-fullwidth')
  $(cityName).text($('#searchArea').val())
  $('#lastSearch').append(cityName)
  $('#searchArea').val('')
  
});
  
}


