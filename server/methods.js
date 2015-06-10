Meteor.methods({
        "userExists": function(username){
            return !!Meteor.users.findOne({username: username});
        },
        "emailExists": function(newEmail){
        	return !!Meteor.users.find({"emails.address": newEmail}, {limit: 1}).count()>0;
        }
    });
