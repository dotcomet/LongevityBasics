Meteor.startup(function(){
  if(Meteor.isCordova && cordova && cordova.platformId === 'ios'){
    try{
      StatusBar.styleDefault();

      setTimeout(function(){
        StatusBar.styleDefault();
      }, 1000)
    }catch(e){
      console.error(e);
    }
  }
})
