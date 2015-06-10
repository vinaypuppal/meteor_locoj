Template.navigation.helpers({
	foo: function () {
		// ...
	}
});

Template.navigation.events({
	'click a#logout': function (e,t) {
		e.preventDefault();
		Meteor.logout(function(error){
			if(!error) Router.go('signin');
		});
	}
});