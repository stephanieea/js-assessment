if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      // iterate through the array to find the item index
      return arr.indexOf(item)

    },

    sum  : function(arr) {
      return arr.reduce(function(acc, val) {
        return acc + val;
      }, 0);
    },

    remove : function(arr, item) {
      // iterate through to splice the item from the arr

      for (var i=0; i < arr.length; i ++) {
        if (item === arr[i]) {
          arr.splice(i, 1)
        }
      }
      return arr
    },

    removeWithoutCopy : function(arr, item) {
      for (var i=0; i < arr.length; i ++) {
        if (item === arr[i]) {
          arr.splice(i, 1)
          i = i-1
        }
      }
      return arr
    },

    append : function(arr, item) {
      arr.push(item)
      return arr
    },

    truncate : function(arr) {
      arr.pop()
      return arr
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2)
    },

    insert : function(arr, item, index) {
      arr.splice(arr.indexOf(index) + 1, 0, item)
      return arr
    },

    count : function(arr, item) {
      return arr.reduce(function(item) {
        if (item in arr) {
          arr[item]++;
        } else {
          arr[item] = 1;
        }
        return arr[item];
      }, {});
    },

    duplicates : function(arr) {
      var count =
       arr.reduce(function(acc, item) {
        if (item in acc) {
          acc[item]++
        }
        else {
          acc[item] = 1
        }
        return acc
      }, {});
      return Object.keys(count).filter(function(item) {
        return count[item] > 1
      });
    },

    square : function(arr) {
      return arr.map(function(item) {
        return item * item
      })
    },

    findAllOccurrences : function(arr, target) {
      return arr.reduce(function(acc, curr, i) {
        if (curr === target)
        acc.push(i);
        return acc;
      }, []);
    }
  };
});
