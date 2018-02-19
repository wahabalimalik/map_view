
var mymap = L.map('first-map', {
	// renderer: L.canvas(),
    center: [-6.81206, 39.28185],
    zoom: 13
});

// var mymap = L.map('first-map').setView([-6.81206, 39.28185], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'sk.eyJ1Ijoid2FoYWJhbGltYWxpayIsImEiOiJjamRvN2tqMDgxMmNmMnBqZzFhb2xmbGtuIn0.0PLFANhIVqTWXaVq_jgJ0Q'
}).addTo(mymap);


			$.getJSON("https://wakashela.carto.com/api/v2/sql?format=GeoJSON&q=SELECT%20*%20FROM%20buildings&api_key=b8ba993f8889a8bead92d783c550b395cd4629d7", function(data) 
          	{
	            console.log(data);
	            building = L.geoJson(data,
	            {
	              onEachFeature: function (feature, layer) 
	              {

	                layer.bindPopup(
	                  '<p><b>' 
	                    + feature.properties.name + 
	                  '</b><br /><em>' 
	                    + feature.properties.osm_id + 
	                  '</em></p>'
	                );

	                layer.cartodb_id=feature.properties.cartodb_id;
	              }
	            }).addTo(mymap);
	          });

			// L.marker([-6.81206, 39.28185]).addTo(mymap)
			// 	.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

			// // L.circle([51.508, -0.11], 500, {
			// // 	color: 'red',
			// // 	fillColor: '#f03',
			// // 	fillOpacity: 0.5
			// // }).addTo(mymap).bindPopup("I am a circle.");

			// L.polygon([
			// 	[-6.817397, 39.27858],
			// 	[-6.816992, 39.279889],
			// 	[-6.815991, 39.280125],
			// 	[-6.814435, 39.277453]
			// ],{
			// 	color: 'red',
			// 	fillColor: '#f03',
			// }).addTo(mymap).bindPopup("I am a polygon.");


			var popup = L.popup();

			function onMapClick(e) {
				popup
					.setLatLng(e.latlng)
					.setContent("You clicked the map at " + e.latlng.toString())
					.openOn(mymap);
			}

			mymap.on('click', onMapClick);