import React, { Component } from 'react'
import { injectIntl } from "react-intl";

import { HubAuthButtons } from 'react-arcgis-hub'

class App extends Component {
  onSignIn = (provider) => {
    console.log('TODO: sign in w/: ', provider || 'AGO')
  }

  render () {
    const {intl, intl:{formatMessage}} = this.props;
    return (
      <div>
        <h3>{formatMessage({ id: 'app.authButtons'})}</h3>
        <HubAuthButtons intl={intl} onSignIn={this.onSignIn} />
      </div>
    )
  }
}

export default injectIntl(App)
