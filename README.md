# Library ui abput selection
[![Build Status](https://travis-ci.org/ouracademy/ngx-dual-listbox.svg?branch=master)](https://travis-ci.org/ouracademy/ngx-dual-listbox)
[![codecov](https://codecov.io/gh/ouracademy/ngx-dual-listbox/branch/master/graph/badge.svg)](https://codecov.io/gh/ouracademy/ngx-dual-listbox)
[![npm version](https://badge.fury.io/js/ngx-dual-listbox.svg)](http://badge.fury.io/js/ngx-dual-listbox)
[![devDependency Status](https://david-dm.org/ouracademy/ngx-dual-listbox/dev-status.svg)](https://david-dm.org/ouracademy/ngx-dual-listbox?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/ouracademy/ngx-dual-listbox.svg)](https://github.com/ouracademy/ngx-dual-listbox/issues)
[![GitHub stars](https://img.shields.io/github/stars/ouracademy/ngx-dual-listbox.svg)](https://github.com/ouracademy/ngx-dual-listbox/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/ouracademy/ngx-dual-listbox/master/LICENSE)

## Demo
https://ouracademy.github.io/ngx-dual-listbox/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Library ui abput selection

## Installation

Install through npm:
```
npm install --save ngx-dual-listbox
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { NgxDualListboxModule } from 'ngx-dual-listbox';

@NgModule({
  imports: [
    NgxDualListboxModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/ouracademy/ngx-dual-listbox/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ngx-dual-listbox/bundles/ngx-dual-listbox.umd.js"></script>
<script>
    // everything is exported ngxDualListbox namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://ouracademy.github.io/ngx-dual-listbox/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
