/**
 * @class ExampleComponent
 */

import * as React from 'react'

import { t, formatTime } from './utils';

import styles from './styles.css'

export type Props = {
  // TODO: :intlShape
  intl: any
  text?: string,
  date?: Date,
  number?: number
}

export default class ExampleComponent extends React.Component<Props> {
  render() {
    const {
      intl,
      text,
      date,
      number
    } = this.props

    return (
      <div className={styles.test}>
        <h3>{t(intl, 'arcgisHub.ExampleComponent.i18nExamples')}</h3>
        {!!text && <p>{t(intl, 'arcgisHub.ExampleComponent.textProp')}: {text}</p>}
        {!!date
          && <p>{t(intl, 'arcgisHub.ExampleComponent.dateProp')}: {intl.formatDate(date)}
            <br />{t(intl, 'arcgisHub.ExampleComponent.asWeekday')}: {intl.formatDate(date, { weekday: 'short' })}
            <br />{t(intl, 'arcgisHub.ExampleComponent.asTime')}: {formatTime(intl, date)}
            <br />{t(intl, 'arcgisHub.ExampleComponent.as24Hr')}: {formatTime(intl, date, { hour12: false })}</p>}
        {!!number
          && <p>{t(intl, 'arcgisHub.ExampleComponent.numberProp')}: {intl.formatNumber(number)}
            <br />{t(intl, 'arcgisHub.ExampleComponent.asCurrency')}: {intl.formatNumber(number, {style: 'currency', currency: 'USD'})}</p>
        }
      </div>
    )
  }
}
