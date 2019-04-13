// Creating our initial map object
// Define arrays to hold created city and state markers
var pinotNoirMarkers = [];
var chardonnayMarkers = [];
var redBlendMarkers = [];
var cabernetSauvignonMarkers = [];
var all_elseMarkers = [];

var url = '/api'
// Grab the data with d3
d3.json(url).then(function(data){
  console.log(data)

  console.log(data.data[0].lats)

  // Create a new marker cluster group
  var markers = L.markerClusterGroup();


// Loop through data
// Loop through locations and create city and state markers
// 	L.marker([location.lats, location.lngs]).addTo(myMap);
for (var i = 0; i < data.data.length; i++) {
	var location = data.data[i];
// 	console.log(location.lngs);
// 	L.marker([location.lats, location.lngs]).addTo(myMap);
  // Set the marker radius for the state by passing population into the markerSize function
  
  if (location.variety = "Pinot Noir"){
  	pinotNoirMarkers.push(
    markers.addLayer(L.marker([location.lats, location.lngs])))
  } else if (location.variety = "Chardonnay"){
  	chardonnayMarkers.push(
    markers.addLayer(L.marker([location.lats, location.lngs])))
  }  else if (location.variety = "Red Blend"){
  	chardonnayMarkers.push(
    markers.addLayer(L.marker([location.lats, location.lngs])))
  }  else if (location.variety = "Cabernet Sauvignon"){
  	chardonnayMarkers.push(
    markers.addLayer(L.marker([location.lats, location.lngs])))
  } else
  	{
  	chardonnayMarkers.push(
    markers.addLayer(L.marker([location.lats, location.lngs])))
  }  
}

myMap.addLayer(markers)
// 
// for(i=0; i< data.data.length; i++){
//   // Set the data location property to a variable
//   var location = data.data[i];
//   // Check for location property
//   if(location){
// 
//   // Add a new marker to the cluster group and bind a pop-up
//     markers.addLayer(L.marker([location.lats, location.lngs]))
//     .bindPopup(location.title);
//   }
// 
//   // Add our marker cluster layer to the map
// myMap.addLayer(markers)
// }

})

console.log(pinotNoirMarkers);
// Define variables for our tile layers
var lightmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
});

var emeraldmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.emerald",
  accessToken: API_KEY
});

var streetsmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

// Create two separate layer groups below. One for city markers, and one for states markers
var pinotNoir = L.layerGroup(pinotNoirMarkers);
var chardonnay = L.layerGroup(chardonnayMarkers);
var redBlend = L.layerGroup(redBlendMarkers);
var cabernetSauvignon = L.layerGroup(cabernetSauvignonMarkers);
var all_else = L.layerGroup(all_elseMarkers);

// Only one base layer can be shown at a time
var baseMaps = {
  "Light": lightmap,
  "Emerald": emeraldmap,
  "Streets": streetsmap
};

// Overlays that may be toggled on or off
var overlayMaps = {
  "Pinot Noir": pinotNoir,
  "Chardonnay": chardonnay,
  "Red Blend": redBlend,
  "cabernet Sauvignon": cabernetSauvignon,
  "Bordeaux-style Red Blend": all_else
};

// We set the longitude, latitude, and the starting zoom level=========================end
// This gets inserted into the div with an id of 'map'
var myMap = L.map("map", {
  center: [38.5025, -122.2654],
  zoom: 13,  // 0 to 24
  maxZoom: 18,
  layers: [streetsmap, pinotNoir, chardonnay]  // , chardonnay, redBlend, cabernetSauvignon, bordeaux]
});

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
// L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.streets",
//   accessToken: API_KEY
// });

// Assemble API query URL
// var url = '/api'
// // Grab the data with d3
// d3.json(url).then(function(data){
//   console.log(data)
// 
//   console.log(data.data[0].lats)
// 
//   // Create a new marker cluster group
//   var markers = L.markerClusterGroup();
// 
// 
// // Loop through data
// 
// for(i=0; i< data.data.length; i++){
//   // Set the data location property to a variable
//   var location = data.data[i];
//   // Check for location property
//   if(location){
// 
//   // Add a new marker to the cluster group and bind a pop-up
//     markers.addLayer(L.marker([location.lats, location.lngs]))
//     .bindPopup(location.title);
//   }
// 
//   // Add our marker cluster layer to the map
// myMap.addLayer(markers)
// }
// 
// })
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);





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

