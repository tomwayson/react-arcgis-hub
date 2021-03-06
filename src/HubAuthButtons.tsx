import * as React from 'react'

import { t } from './utils/intl'

export type HubAuthButtonsProps = {
  onSignIn?: (provider?: string) => void;
  // TODO: :intlShape
  intl?: any;
}

export default class HubAuthButtons extends React.Component<HubAuthButtonsProps> {
  onButtonClick (provider?: string) {
    if (typeof this.props.onSignIn === 'function') {
      this.props.onSignIn(provider);
    }
  }

  render() {
    const { intl } = this.props;
    return <div>
      <button onClick={() => this.onButtonClick('facebook')} className="btn btn-block btn-social btn-facebook">
        <img src="//d1iq7pbacwn5rb.cloudfront.net/opendata-ui/assets/assets/images/facebook_btn-cece4e56a57496bc2da4c62d8fbd691d.png" alt="" /> {t('arcgisHub.HubAuthButtons.withFacebook', intl)}
      </button>
      <button onClick={() => this.onButtonClick('google')} className="btn btn-block btn-social btn-google">
        <img src="//d1iq7pbacwn5rb.cloudfront.net/opendata-ui/assets/assets/images/google_btn-8b7e21aaa900e1cb388760f964bb0b5b.png" alt="" /> {t('arcgisHub.HubAuthButtons.withGoogle', intl)}
      </button>
      <button onClick={() => this.onButtonClick()} className="btn btn-block btn-social btn-ago">
        <img src="//d1iq7pbacwn5rb.cloudfront.net/opendata-ui/assets/assets/images/bank-34bcd4a0cb3cf2f66d6161f95a3be3d0.png" alt="" /> {t('arcgisHub.HubAuthButtons.withOrganization', intl)}
      </button>
    </div>;
  }
}
