if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      this.name = obj.name
      this.greeting = obj.greeting
      this.fn = fn
      return this.fn()
    },

    alterObjects : function(constructor, greeting) {
      this.constructor = constructor
      this.greeting = greeting
      constructor.prototype.greeting = greeting
    },

    iterate : function(obj) {
      return Object.keys(obj).map(function(key) {
        return `${key}: ${obj[key]}`
      })
    }
  };
});
