import React, { Component } from 'react'
import { injectIntl } from "react-intl";

import ExampleComponent from 'react-arcgis-hub'

class App extends Component {
  render () {
    const {intl, intl:{formatMessage}} = this.props;
    return (
      <div>
        <ExampleComponent intl={intl} text={formatMessage({ id: 'app.modernReactComponentModule' })} />
      </div>
    )
  }
}

export default injectIntl(App)
