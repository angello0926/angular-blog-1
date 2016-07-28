app.factory('PostFactory', ['$resource', function($resource){
  // var factory = {
  //   posts: [],
  //   API: $resource('/posts/:id.json', {id:'@id'})
  // };

  // var factory = {
  //   users: $resource('/users/:id.json', {id:'@id'}),
  //   posts: $resource('/posts/:id.json', {id:'@id'})
  // };

  return factory;
}]);
