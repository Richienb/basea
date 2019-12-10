# Basea [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/basea/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/basea)

Convert between numerical bases.

[![NPM Badge](https://nodei.co/npm/basea.png)](https://npmjs.com/package/basea)

## Install

```sh
npm install basea
```

## Usage

```js
const basea = require("basea");

basea(20, 16); // Convert 20 to base 16
//=> '14'

basea("14", 16, 10); // Convert 20 to base 10 from base 16
//=> '20'

basea(10, "abc"); // Convert 10 to use a custom base
//=> 'bab'
```

## API

### basea(number, from, to)

### basea(number, to)

### basea(stringNumber, from)

#### number

Type: `number or string`

The number to convert.

#### from

Type: `number or string`

The base to convert from.

#### to

Type: `number or string`

The base to convert to.

### basea.bases

Type: `object`

Numerical bases to use for conversion. Can be modified to affect the output of basea, such as `basea.bases[999] = "abc"`.
