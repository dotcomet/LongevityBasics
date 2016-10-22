Template.supplements.helpers({
  scoreSbs : function () {
      return Session.get('scoreSbs')
  },
  colorSbs : function () {
      return Session.get('colorSbs')
  },

  scoreSs2 : function () {
      return Session.get('scoreSs2')
  },
  colorSs2 : function () {
      return Session.get('colorSs2')
  },

    scoreSps : function () {
        return Session.get('scoreSps')
    },
    colorSps : function () {
        return Session.get('colorSps')
    },

    scoreSs : function () {
        return Session.get('scoreSs')
    },
    colorSs : function () {
        return Session.get('colorSs')
    },






    colorSupplements : function () {
        return Session.get('colorSupplements')
    },
    scoreSupplements : function () {
        return Session.get('scoreSupplements')
    }
});
