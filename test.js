var joinParams = require("./");

it('joins parameters in a new formatted one', function(){

  var partialMirror = joinParams(mirror, 'foo {0} bar {2} qux {1}', 3);

  expect(partialMirror('>', '->', '=>', 1, 2, 3)).to.deep.equal(['foo > bar => qux ->', 1, 2, 3]);

  function mirror(){
    return arguments;
  }

});

it('cuts the context considering last argument is a callback', function() {

  var partialAsync = joinParams(async, '/{0}/{1}');

  partialAsync('home', 'azer', function(error, foo){

    expect(error).to.not.exist;
    expect(foo).to.equal('/home/azer');

  });

  function async(foo, callback){
    return callback(undefined, foo);
  }

});
