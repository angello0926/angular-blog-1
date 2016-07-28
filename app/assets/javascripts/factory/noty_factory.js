app.factory('NotyFactory', function(){
  var Noty = {
    error: function(message){
      noty({
        text: message,
        type: 'error'
      });
    }
  };

  return Noty;
});
