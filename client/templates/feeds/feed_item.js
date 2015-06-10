Template.feedItem.rendered = function(){
  $('.feed-body').readmore({
  	collapsedHeight:100,
  	speed:75,
  	moreLink:'<a href="#">See more</a>',
  	lessLink:'<a href="#">See less</a>'
  }); 
};