Meteor.startup(function() {
		GoogleMaps.load();
		Location.locate(function(pos){
			lat = pos.latitude;
			lng = pos.longitude;
			}, function(err){
			   console.log("Oops! There was an error", err);
			});		
    });

