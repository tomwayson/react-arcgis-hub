import React, { Component } from 'react'
import { injectIntl } from "react-intl";

import { HubAuthButtons, ExampleComponent } from 'react-arcgis-hub'

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
        <h3>{formatMessage({ id: 'app.i18nExample'})}</h3>
        <ExampleComponent
          intl={intl}
          text={formatMessage({ id: 'app.thisTextWasPassedIn' })}
          date={Date.now()}
          number={1000} />
      </div>
    )
  }
}

export default injectIntl(App)
