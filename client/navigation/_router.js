
Router.configure({
  layoutTemplate:'layout'
});

Router.map(function(){
	this.route('home', {path:'/'})

  this.route('nutrition', {path:'/nutrition'})
  this.route('workout', {path:'/workout'})
  this.route('mentalBalance', {path:'/mentalBalance'})
  this.route('detox', {path:'/detox'})
  this.route('supplements', {path:'/supplements'})
  this.route('quantifiedSelf', {path:'/quantifiedSelf'})
  this.route('biomarkers', {path:'/biomarkers'})
  this.route('hormones', {path:'/hormones'})
  this.route('screenings', {path:'/screenings'})

  this.route('fivehundred', {path:'/fivehundred'})
  this.route('future', {path:'/future'})
  this.route('disclaimer', {path:'/disclaimer'})
  this.route('contact', {path:'/contact'})
});
