Template.workout.helpers({
  scoreWst : function () {
      return Session.get('scoreWst')
  },
  colorWst : function () {
      return Session.get('colorWst')
  },

  scoreWs : function () {
      return Session.get('scoreWs')
  },
  colorWs : function () {
      return Session.get('colorWs')
  },

  scoreWmlm : function () {
      return Session.get('scoreWmlm')
  },
  colorWmlm : function () {
      return Session.get('colorWmlm')
  },

  scoreWcys : function () {
      return Session.get('scoreWcys')
  },
  colorWcys : function () {
      return Session.get('colorWcys')
  },




    colorWorkout : function () {
        return Session.get('colorWorkout')
    },
    scoreWorkout : function () {
        return Session.get('scoreWorkout')
    }
});
