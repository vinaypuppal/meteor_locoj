Router.configure({
	layoutTemplate:'appLayout',
	loadingTemplate:'loading',
	notFoundTemplate:'notFound'
});

Router.route('/',{name:'feedsList'});

Router.route('/login',{name:'loginPage',layoutTemplate:'defaultLayout'});
Router.route('/signup',{name:'signupPage',layoutTemplate:'defaultLayout'});