


$(function(){
	  $("#map").load(myMap());
	  
    });
	


function myMap() {
	var mapCanvas = document.getElementById("map");
	var myCenter = new google.maps.LatLng(40.441579, -79.956314);
	var mapOptions = {center: myCenter, zoom: 17};
	var map = new google.maps.Map(mapCanvas,mapOptions);
	var marker = new google.maps.Marker({
	  position: myCenter,
	  animation: google.maps.Animation.BOUNCE
	});
	marker.setMap(map);
}