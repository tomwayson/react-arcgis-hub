# react-arcgis-hub

A library of [ArcGIS Hub](http://hub.arcgis.com/) components for [React]  applications.

[![NPM](https://img.shields.io/npm/v/react-arcgis-hub.svg)](https://www.npmjs.com/package/react-arcgis-hub)

> **NOTE:** This library should be considered experimental for the time being

Pairs nicely with [@esri/hub.js](https://esri.github.io/hub.js/), and [@esri/arcgis-rest-js](https://esri.github.io/arcgis-rest-js/).

## Install

```bash
npm install --save react-arcgis-hub
```

or

```bash
yarn add react-arcgis-hub
```

## Usage

```js
import React from 'react'

// these components render markup that leverages Bootstrap CSS
// NOTE: you do NOT need to supply a Bootstrap JS implementation, but
// you can use these components with react-bootstrap, reactstrap, etc
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-arcgis-hub/dist/react-arcgis-hub.css'

// these components rely on react-intl's intl being passed as a prop
import { injectIntl } from 'react-intl'

// a component showing login buttons for ArcGIS Online, Facebook, or Google
import { HubAuthButtons } from 'react-arcgis-hub'

class App extends React.Component {
  onSignIn = (provider) => {
    // TODO: start the OAuth 2 login process after user clicks a button
    // optionally using Facebook or Google as the auth provider
    console.log('TODO: log in w/ :', provider || 'ArcGIS Online')
  }

  render () {
    const { intl } = this.props
    return (
      <HubAuthButtons intl={intl} onSignIn={this.onSignIn} />
    )
  }
}

export default injectIntl(App)
```

## Dependencies

### Bootstrap
The components in this library generate markup that depends on [Bootstrap](https://getbootstrap.com/) CSS. You do **NOT** _need_ to supply a Bootstrap JS implementation, but you _can_ use these components with [react-bootstrap](https://react-bootstrap.github.io/), [reactstrap](https://reactstrap.github.io/), etc.

### react-intl
The components in this library are also internationalized and are designed to work w/ [react-intl](https://github.com/yahoo/react-intl). Each component requires a prop named `intl` which is what you get when you use [injectIntl()](https://github.com/yahoo/react-intl/wiki/API#injection-api) (i.e. of type [intlShape](https://github.com/yahoo/react-intl/wiki/API#intlshape)).

#### Configuring react-intl

The default translations for this libary are distributed with the built code.

See how the [Example app loads the translations from this library and configures react-intl](./example/src/AppWrapper.js).

## Development

This library was created with [create-react-library](https://www.npmjs.com/package/create-react-library).

Follow these [development instructions](https://github.com/transitive-bullshit/create-react-library#development) to build and run the library and example app locally.

## License

Apache-2.0 © [tomwayson](https://github.com/tomwayson)

[React]:https://reactjs.org/
[Ember.js]:https://www.emberjs.com/
