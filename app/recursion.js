if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var listOfFiles = [];
      var dirs = [];

      function processDir(dir) {

        var files = dir.files;

        dirs.push( dir.dir );

        for (var i = 0 ; i < files.length; i++) {
          if (typeof files[i] === 'string') {
            if (!dirName || dirs.indexOf(dirName) > -1) {
              listOfFiles.push(files[i]);
            }
          } else {
            processDir(files[i]);
          }
        }

        dirs.pop();
      }

      processDir(data);


      return listOfFiles;
    },

    permute: function(arr) {
      var temp = [];
      var answer = [];

      function logResult() {
        answer.push(temp.slice());
      }

      function build() {
        for (var i = 0; i < arr.length ; i++) {
          var item = arr.splice(i, 1)[0];
          temp.push(item);
          if(arr.length) {
            build();
          } else {
            logResult();
          }
          arr.splice(i, 0, item);
          temp.pop();
        }
        return answer;
      }
      return build();
    }
  };
});
