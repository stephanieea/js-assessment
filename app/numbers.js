if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      return 1 & (num >> (bit - 1));
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      var array = [];

      for (var i = 7; i > -1; i--) {
        array.push( num & (1 << i) ? 1 : 0 );
      }

      return array.join('');
    },

    multiply: function(a, b) {
      a = adjust(a);
      b = adjust(b);

      var result = (a.adjusted * b.adjusted) / (a.multiplier * b.multiplier);

      return result;

      function adjust(num) {
        if (num < 1) {
          var exponent = Math.floor( Math.log(num) * -1 );
          var multiplier = Math.pow(10, exponent);

          return {adjusted: num * multiplier, multiplier: multiplier};
        }
        return {adjusted: num, multiplier: 1};
      }
    }
  }
});
