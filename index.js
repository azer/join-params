var format = require("new-format");

module.exports = joinParams;

function joinParams(fn, template, until){

  return function(){

    until == undefined && ( until = arguments.length - 1 );

    var context = Array.prototype.slice.call(arguments, 0, parseInt(until)),
        params  = [ format.apply(undefined, [template].concat(context)) ];

    params.push.apply(params, Array.prototype.slice.call(arguments, parseInt(until)));

    return fn.apply(undefined, params);

  };

}
