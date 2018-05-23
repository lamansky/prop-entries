# prop-entries

Returns an array of all properties (owned and inherited) of an object.

## Installation

Requires [Node.js](https://nodejs.org/) 7.0.0 or above.

```bash
npm i prop-entries
```

## API

The module exports a single function.

### Parameters

1. Bindable: `obj` (object): The object whose properties you want to get.
2. Object argument:
   * Optional: `own` (boolean): If set to `true`, only the object’s “[own](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)” properties are returned. If omitted or if set to `false`, both owned and inherited properties are returned.
   * Optional: `enumOnly` (boolean): If set to `true`, only properties defined with the `enumerable` flag will be returned.

### Return Value

An array of two-element key-value-pair arrays.

## Example

```javascript
const props = require('prop-entries')

props({key: 'value'}, {own: true}) // [['key', 'value']]
```

## Related

* [prop-keys](https://github.com/lamansky/prop-keys): Same as this module, except it returns only keys.
* [prop-values](https://github.com/lamansky/prop-values): Same as this module, except it returns only values.
* [entries-array](https://github.com/lamansky/entries-array): Supports more than just Objects.
