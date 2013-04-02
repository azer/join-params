## join-params

Partial function application with parameter formatting.

```bash
$ npm install join-params
```

## Usage

```js

request    = require('request')
joinParams = require('join-params')

search = joinParams(request, 'https://www.google.com/search?q={1} site:{0}')

search('npmjs.org', 'partial application', function(error, response, body){

    body
    // => search results for "partial application site:npmjs.org"

})

```

Another example:

```js

var log = joinParams(print, '[Log {0}]', 1) // "1"

log('info', 'hello', 'world')
// => [Log info] hello, world

function print(){
  process.stdout.write( Array.prototype.join.call(arguments, ', ') )
}
```

![](https://dl.dropbox.com/s/9q2p5mrqnajys22/npmel.jpg)
