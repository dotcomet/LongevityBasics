

Template.home.helpers({

  scoreNutrition: function(){
    return Session.get('scoreNutrition');
  },
  colorNutrition: function(){
    return Session.get('colorNutrition');
  },


  scoreWorkout: function(){
    return Session.get('scoreWorkout');
  },
  colorWorkout: function(){
    return Session.get('colorWorkout');
  },

  scoreMentalBalance: function(){
    return Session.get('scoreMentalBalance');
  },
  colorMentalBalance: function(){
    return Session.get('colorMentalBalance');
  },

  scoreDetox: function(){
    return Session.get('scoreDetox');
  },
  colorDetox: function(){
    return Session.get('colorDetox');
  },

  scoreSupplements: function(){
    return Session.get('scoreSupplements');
  },
  colorSupplements: function(){
    return Session.get('colorSupplements');
  },

  scoreQuantifiedSelf: function(){
    return Session.get('scoreQuantifiedSelf');
  },
  colorQuantifiedSelf: function(){
    return Session.get('colorQuantifiedSelf');
  },

  scoreBiomarkers: function(){
    return Session.get('scoreBiomarkers');
  },
  colorBiomarkers: function(){
    return Session.get('colorBiomarkers');
  },


  scoreHormones: function(){
    return Session.get('scoreHormones');
  },
  colorHormones: function(){
    return Session.get('colorHormones');
  },

  scoreCheckups: function(){
    return Session.get('scoreCheckups');
  },
  colorCheckups: function(){
    return Session.get('colorCheckups');
  },


  scoreForeverHealthy: function(){
    return Session.get('scoreForeverHealthy');
  },
  colorForeverHealthy: function(){
    return Session.get('colorForeverHealthy');
  },

});
