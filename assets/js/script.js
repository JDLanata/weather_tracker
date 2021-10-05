console.log("hello there")
var apiKey = "a94854f2d3d0f7762987fe81bca50927";
var city;
var lat;
var lon;
// var searchArea = $("#searchArea");
var searchBtn = $('#searchBtn');
var lastSearch = $('#lastSearch');
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
  cityFind();
  searchHist();
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
      todayTemp.text('Temp: '+ data.current.temp)
      todayWind.text('Wind: ' +data.current.wind_speed)
      todayHumid.text('Humidity: ' +data.current.humidity)
      todayUv.text('UV-Index: '+ data.current.uvi)


    });

}




////Store search History in localstorage data
lastSearch = JSON.parse(localStorage.getItem("weather")) || [];



function searchHist() {


  
  

  for (let i = 0; i < lastSearch.length; i++) {

    var newLi = document.createElement('button');
    $(newLi).text(city);
   
$(city).add(lastSearch)
  }

  localStorage.setItem("weather", JSON.stringify(lastSearch));


}










