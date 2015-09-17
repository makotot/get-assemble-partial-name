# get-assemble-partial-name

[![npm version](http://img.shields.io/npm/v/get-assemble-partial-name.svg?style=flat-square)](https://github.com/makotot/get-assemble-partial-name)
[![travis](http://img.shields.io/travis/makotot/get-assemble-partial-name.svg?style=flat-square)](https://github.com/makotot/get-assemble-partial-name)
[![dependencies](http://img.shields.io/david/makotot/get-assemble-partial-name.svg?style=flat-square)](https://github.com/makotot/get-assemble-partial-name)
[![devDependencies](http://img.shields.io/david/dev/makotot/get-assemble-partial-name.svg?style=flat-square)](https://github.com/makotot/get-assemble-partial-name)
[![License](http://img.shields.io/npm/l/get-assemble-partial-name.svg?style=flat-square)](https://github.com/makotot/get-assemble-partial-name)

> Get the assemble partial name


## Install

```sh
$ npm i --save get-assemble-partial-name
```


## Usage

```js
getPartialName('./src/partials/header.hbs', function (err, name) {
  console.log(name);
  // => 'header'
});
```


## License

MIT

