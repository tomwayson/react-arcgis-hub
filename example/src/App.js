import React, { Component } from 'react'
import { injectIntl } from "react-intl";

import { HubAuthButtons, ItemPager } from 'react-arcgis-hub'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: 1,
      provider: null
    }
  }
  onSignIn = (provider) => {
    this.setState({
      provider: provider || 'AGO'
    })
  }
  changePage = (pageNumber) => {
    this.setState({
      currentPage: pageNumber
    })
  }
  render () {
    const {intl, intl:{formatMessage}} = this.props
    const {
      currentPage,
      provider
    } = this.state
    return (
      <div>
        <div>
          <h3>{formatMessage({ id: 'app.authButtons'})}</h3>
          <div style={{ width: 250 }}>
            <HubAuthButtons intl={intl} onSignIn={this.onSignIn} />
          </div>
          <p>{provider ? formatMessage({ id: 'app.signInMessage' }, { provider }) : ''}</p>
        </div>
        <div>
          <h3>{formatMessage({ id: 'app.itemPager'})}</h3>
          <ItemPager
            intl={intl}
            pageSize={10}
            totalCount={500}
            pageNumber={currentPage}
            changePage={this.changePage}
          />
        </div>
      </div>
    )
  }
}

export default injectIntl(App)
