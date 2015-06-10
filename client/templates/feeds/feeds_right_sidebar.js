Template.feedsRightSidebar.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      console.log(lat);
      return {
        center: new google.maps.LatLng(lat, lng),
        zoom: 15,
        disableDefaultUI:true,
        draggable:false,
        scrollwheel:false
      };
    }
  }
});


Template.feedsRightSidebar.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance,
      animation:google.maps.Animation.BOUNCE
    });
    reverseGeocode.getLocation(lat, lng, function(location){

        //location is straight output from Google
        //or you can now access it from reverseGeocode object
        Session.set('location', reverseGeocode.getAddrStr());
    });
    console.log(Session.get('location'));
    var infowindow = new google.maps.InfoWindow();
    var address;
    if(Session.get('location')){address = Session.get('location');}
    else{ address='No address Found'; }
    infowindow.setContent(address);
    infowindow.open(map, marker);
  });
});
