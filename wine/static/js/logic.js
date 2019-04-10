// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var myMap = L.map("map", {
  center: [38.5025, -122.2654],
  zoom: 13  // 0 to 24
});

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Assemble API query URL
var url = '/api'
// Grab the data with d3
d3.json(url, function(data){
  // console.log(data)

  console.log(data.data[0].lats)

  // Create a new marker cluster group
  var markers = L.markerClusterGroup();


// Loop through data

for(i=0; i< data.data.length; i++){
  // Set the data location property to a variable
  var location = data.data[i];
  // Check for location property
  if(location){

  // Add a new marker to the cluster group and bind a pop-up
    markers.addLayer(L.marker([location.lats, location.lngs]))
    .bindPopup(location.title);
  }

  // Add our marker cluster layer to the map
myMap.addLayer(markers)
}

})




// // Creating map object
// var myMap = L.map ("map", {
//   center: [40.7, -73.95],
//   zoom: 11
// });

// // Adding tile layer to the map
// L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.streets",
//   accessToken: API_KEY
// }).addTo(myMap);

// // TODO:

// // Assemble API query URL
// var url = '/api'
// // Grab the data with d3
// d3.json(url, function(data){
//   console.log(data)

//   // Create a new marker cluster group
//   var markers = L.markerClusterGroup();


// // Loop through data

// for(i=0; i< data.length; i++){
//   // Set the data location property to a variable
//   var location = data[i];
//   // Check for location property
//   if(location){

//   // Add a new marker to the cluster group and bind a pop-up
//     markers.addLayer(L.marker([location.lats, location.lngs]))
//     .bindPopup(data[i].title);
//   }

//   // Add our marker cluster layer to the map
// myMap.addLayer(markers)
// }

// })

