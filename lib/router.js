Router.configure({
	 layoutTemplate: 'defaultLayout',
	loadingTemplate:'loading',
	notFoundTemplate:'notFound'
});

Router.route('/',{
	name:'feedsPage',
	layoutTemplate:'appLayout',
	loadingTemplate: 'loading',

	waitOn: function () {
	   // return one handle, a function, or an array
	   return Meteor.subscribe('feeds');
	},

	action: function () {
	   this.render('feedsPage');
	}
});

Router.route('/emailVerifyMsgPage',{name:'emailVerifyMsgPage'});

AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/login',
    template: 'loginPage',
    layoutTemplate: 'defaultLayout',
    redirect: function(){
        var user = Meteor.user();
        if (user)
          Router.go('/');
    }
});

AccountsTemplates.configureRoute('signUp', {
    name: 'signup',
    path: '/signup',
    template: 'signupPage',
    layoutTemplate: 'defaultLayout',
    redirect: '/emailVerifyMsgPage',
});

AccountsTemplates.configureRoute('forgotPwd', {
    name: 'forgotpassword',
    path: '/forgotpassword',
    template: 'forgotPasswordPage',
    layoutTemplate: 'defaultLayout',
    redirect: '/login'
});

AccountsTemplates.configureRoute('resetPwd', {
    name: 'resetpassword',
    path: '/resetpassword',
    template: 'resetPasswordPage',
    layoutTemplate: 'defaultLayout'
});

AccountsTemplates.configureRoute('verifyEmail', {
    name: 'verifiedemail',
    path: '/verifiedemail',
    template: 'verifiedEmailPage',
    layoutTemplate: 'defaultLayout',
    redirect:function(){
        var user = Meteor.user();
        if (user)
          Router.go('/user/' + user._id +'/wizard');
    }
});

AccountsTemplates.configureRoute('resendVerificationEmail', {
    name: 'resendVerificationEmail',
    path: '/resendVerificationEmail',
    template: 'resendEmailPage',
    layoutTemplate: 'defaultLayout'
});

Router.route('/user/:_id/wizard',{
    name:'wizard',
    layoutTemplate:'defaultLayout',
    data:function(){
            return this.params._id;
        }
})


