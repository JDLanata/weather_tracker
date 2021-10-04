console.log("hello there")
var apiKey = "a94854f2d3d0f7762987fe81bca50927";
var city;
var lat;
var long;
var searchArea = $("#searchArea");
var searchBtn = $("#searchBtn");
var lastSearch = $("#lastSearch");

console.log(searchArea.val())


// var fiveDayApi = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+apiKey;


// var apiUrl = "htts://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&appid="+apiKey;

console.log(apiUrl)
searchBtn.click(function(event) {
  event.preventDefault();
  city = searchArea.val();
  console.log(city);
  cityFind();
})
 
function cityFind(apiUrl){
  // console.log(city);
  fetch(apiUrl)
  .then(function(response){

  console.log(response);
    return response.json();
   })


}



////Store search History in localstorage data
lastSearch = JSON.parse(localStorage.getItem("weather")) || [];



function searchHist(event) {
    event.preventDefault();

    var weatherCity = {
        place: newPlace
    
    }

    lastSearch.push(weatherCity);

    for (let i = 0; i < lastSearch.length; i++) {

        var newLi = $("<li></li>")
        newLi.append(lastSearch[i].place);
        searchArea.append(newLi);

    }

    localStorage.setItem("weather", JSON.stringify(lastSearch));
    

}








// var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=london&appid="+apiKey;
// console.log(requestUrl);


// function getApi(requestUrl) {

    
  
//     fetch(requestUrl)
//       .then(function (response) {
//           console.log(response)
//         return response.json();

//       })
//       .then(function (data) {
//         console.log(data);
//       });
//   }
  
// getApi();


