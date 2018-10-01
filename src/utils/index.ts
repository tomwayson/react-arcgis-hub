// emulating the ember-intl t() API in React
export function t(intl: any, message: string, values?: { [index:string]: any }, formats?: any): string {
  // both react-intl and ember-intl expose .formatMessage(), but they work differently
  // https://github.com/yahoo/react-intl/wiki/API#formatmessage
  // https://github.com/ember-intl/ember-intl/blob/2.x/docs/ember-service-api.md#methods
  // ember-intl's t() is closer to react-intl's formatMessage()
  const isEmberIntl = intl.t;
  if (isEmberIntl) {
    // we are in Ember, pass all arguments (including formatting options) to t()
    return intl.t(message, values, formats);
  } else {
    // we are in react, pass a MessageDescriptor-like object and values to formatMessage()
    return intl.formatMessage({ id: message }, values)
  }
}
