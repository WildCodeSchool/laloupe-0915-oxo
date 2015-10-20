// FIND CONTROLLER
function findController($scope, findService) {

	function initialize() {
	  var mapProp = {
	    center:new google.maps.LatLng(-25.363, 131.044),
	    zoom:7,
	    mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	}
	google.maps.event.addDomListener(window, 'load', initialize);
}