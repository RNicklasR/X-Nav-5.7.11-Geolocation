$(document).ready(function() {
	$("#geo").click(getLocation);
	
	if (Modernizr.geolocation) {
	 	$("#info").html("hay geolocation");
	}else{
		$("#info").html("NO hay geolocation");
	}


	function getLocation(){
		if(navigator.geolocation){
 			navigator.geolocation.getCurrentPosition(showPosition);
		}else{
 			$("#info").text("Geolocation is not supported by this browser.");
		}

		function showPosition(position) {
			$("#info").text("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
			
			 var latlon = position.coords.latitude + "," + position.coords.longitude;

			 var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false";


			$("#map").html( "<img src='"+img_url+"'>");


			$("#info2").text("Antipodas Latitude: " + (position.coords.latitude-180) + " Longitude: " + (position.coords.longitude+180));
			
			 var latlon = position.coords.latitude-180 + "," + position.coords.longitude+180;

			 var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false";


			$("#antipodas").html( "<img src='"+img_url+"'>");

			/*Esto para hacerlo con openstreetmap
			var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 16);
			L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { //para mapquest: http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png
				attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
			}).addTo(map);
				var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
			marker.bindPopup("<b>Estas aqui. </b>").openPopup();*/
		}
	}

});
