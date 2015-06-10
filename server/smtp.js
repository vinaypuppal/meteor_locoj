Meteor.startup(function () {
  smtp = {
    username: 'puppalvinay@gmail.com',   // eg: server@gentlenode.com
    password: 'RXX0knstJFVr2l7d4V8MsQ',   // eg: 3eeP1gtizk5eziohfervU
    server:   'smtp.mandrillapp.com',  // eg: mail.gandi.net
    port: 587
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;

  Accounts.emailTemplates.from = 'Locoj <admin@locoj.in>';

    // The public name of your application. Defaults to the DNS name of the application (eg: awesome.meteor.com).
    Accounts.emailTemplates.siteName = 'Locoj';

});