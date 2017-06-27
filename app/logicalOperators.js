if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    or : function(a, b) {
      if (a == false && b == false) {
        return false
      } else {
        return true
      }
    },

    and : function(a, b) {
      if (a == true && b == true) {
        return true
      } else {
        return false
      }
    }
  };
});
