console.log("hello there")
var apiKey = "a94854f2d3d0f7762987fe81bca50927";
var city;
var lat;
var lon;


var requestUrl = "api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
console.log(requestUrl);
function getApi(requestUrl) {
    // Insert the API url to get a list of your repos
    
  
    fetch(requestUrl)
      .then(function (response) {
          console.log(response)
        return response.json();

      })
      .then(function (data) {
        console.log(data);
      });
  }
  
getApi();