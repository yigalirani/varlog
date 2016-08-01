# varlog


Dump complex Javascript variables and view using drill down interface

## Installation

```sh
$ npm install varlog
```

## Sample code
```js
const http = require('http');
var varlog = require("varlog");

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end(
		varlog.css+
		varlog.dump('req',req,2)+//2 refers to depth, default is 3
		varlog.dump('res',res)
	);
});

```