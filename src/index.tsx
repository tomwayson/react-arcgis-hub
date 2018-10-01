/**
 * @class ExampleComponent
 */

import * as React from 'react'

import { t } from './utils';

import styles from './styles.css'

export type Props = {
  // TODO: :intlShape
  intl: any
  text: string
}

export default class ExampleComponent extends React.Component<Props> {
  render() {
    const {
      intl,
      text
    } = this.props

    return (
      <div className={styles.test}>
        {t(intl, 'arcgisHub.ExampleComponent.ExampleComponent')} {text}
      </div>
    )
  }
}
