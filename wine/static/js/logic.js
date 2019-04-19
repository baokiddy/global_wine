// Creating our initial map object
// Define arrays to hold created city and state markers
// var pinotNoirMarkers = [];
// var chardonnayMarkers = [];
// var redBlendMarkers = [];
// var cabernetSauvignonMarkers = [];
// var all_elseMarkers = [];

var url = '/api'
// Grab the data with d3
d3.json(url).then(function(data){

  // var sample = data.data.slice(0,1000)

  console.log(data)

  // Create a new marker cluster group
  var pinotNoirMarkers = L.markerClusterGroup();
  var chardonnayMarkers = L.markerClusterGroup();
  var redBlendMarkers = L.markerClusterGroup();
  var cabernetSauvignonMarkers = L.markerClusterGroup();
  var all_elseMarkers = L.markerClusterGroup();


// Loop through data
// Loop through locations and create city and state markers
// 	L.marker([location.lats, location.lngs]).addTo(myMap);
for (var i = 0; i < data.data.length; i++) {
	var location = data.data[i];
	// console.log(location.lngs);
// 	L.marker([location.lats, location.lngs]).addTo(myMap);
  // Set the marker radius for the state by passing population into the markerSize function
  
// markers.addLayer(L.marker([location.lats, location.lngs]))

  if (location.variety === "Pinot Noir"){
  	pinotNoirMarkers.addLayer(
    L.marker([location.lats, location.lngs]).bindPopup("<h5>Variety: " + location.variety + "</h5><hr><h5>Region: " + location.region + "</h5><hr><h5>Winery: " + location.winery + "</h5>"))
  } else if (location.variety === "Chardonnay"){
  	chardonnayMarkers.addLayer(
      L.marker([location.lats, location.lngs]).bindPopup("<h5>Variety: " + location.variety + "</h5><hr><h5>Region: " + location.region + "</h5><hr><h5>Winery: " + location.winery + "</h5>"))
    }  else if (location.variety === "Red Blend"){
  	redBlendMarkers.addLayer(
      L.marker([location.lats, location.lngs]).bindPopup("<h5>Variety: " + location.variety + "</h5><hr><h5>Region: " + location.region + "</h5><hr><h5>Winery: " + location.winery + "</h5>"))
    }  else if (location.variety === "Cabernet Sauvignon"){
  	cabernetSauvignonMarkers.addLayer(
      L.marker([location.lats, location.lngs]).bindPopup("<h5>Variety: " + location.variety + "</h5><hr><h5>Region: " + location.region + "</h5><hr><h5>Winery: " + location.winery + "</h5>"))
    } else
  	{
  	all_elseMarkers.addLayer(
      L.marker([location.lats, location.lngs]).bindPopup("<h5>Variety: " + location.variety + "</h5><hr><h5>Region: " + location.region + "</h5><hr><h5>Winery: " + location.winery + "</h5>"))
    }  
}
// myMap.addLayer(markers)
console.log(pinotNoirMarkers)

// myMap.addLayer(markers)
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

// })

// console.log(pinotNoirMarkers);
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
// var pinotNoir = L.layerGroup(pinotNoirMarkers);
// var chardonnay = L.layerGroup(chardonnayMarkers);
// var redBlend = L.layerGroup(redBlendMarkers);
// var cabernetSauvignon = L.layerGroup(cabernetSauvignonMarkers);
// var all_else = L.layerGroup(all_elseMarkers);

// Only one base layer can be shown at a time
var baseMaps = {
  "Light": lightmap,
  "Emerald": emeraldmap,
  "Streets": streetsmap
};

// Overlays that may be toggled on or off
var overlayMaps = {
  "Pinot Noir": pinotNoirMarkers,
  "Chardonnay": chardonnayMarkers,
  "Red Blend": redBlendMarkers,
  "cabernet Sauvignon": cabernetSauvignonMarkers,
  "Others": all_elseMarkers
};

// We set the longitude, latitude, and the starting zoom level=========================end
// This gets inserted into the div with an id of 'map'
var myMap = L.map("map", {
  center: [38.5025, -122.2654],
  zoom: 13,  // 0 to 24
  maxZoom: 10,
  layers: [streetsmap, pinotNoirMarkers]  // , chardonnay, redBlend, cabernetSauvignon, bordeaux]
});



L.control.layers(baseMaps, overlayMaps, {
  collapsed: true
}).addTo(myMap);
})
