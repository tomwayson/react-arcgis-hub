function isEmberIntl (intl: any) {
  return !!intl.t
}

// emulating the ember-intl t() API in React
export function t(message: string, intl?: any, values?: { [index:string]: any }, formats?: any): string {
  if (!intl) {
    // no intl, just return the message
    return message;
  }
  // both react-intl and ember-intl expose .formatMessage(), but they work differently
  // https://github.com/yahoo/react-intl/wiki/API#formatmessage
  // https://github.com/ember-intl/ember-intl/blob/2.x/docs/ember-service-api.md#methods
  // ember-intl's t() is closer to react-intl's formatMessage()
  if (isEmberIntl(intl)) {
    // we are in Ember, pass all arguments (including formatting options) to t()
    return intl.t(message, values, formats)
  } else {
    // we are in react, pass a MessageDescriptor-like object and values to formatMessage()
    return intl.formatMessage({ id: message }, values)
  }
}

// in react-intl formatTime() injects default options before calling formatDate()
// see: https://github.com/yahoo/react-intl/wiki/API#formattime
// but in ember-intl it's just a straight pass through to formatDate()
// so we need to inject those defaults here just in case
export function formatTime(value: (Date | number | string), intl?: any, options?: any): string {
  if (!intl) {
    // TODO: add much better logic here, for now just returning the default browser implementation
    return new Date(value).toLocaleString()
  }
  const defaultOptions = {
    hour: 'numeric',
    minute: 'numeric'
  }
  const opts = isEmberIntl(intl) ? { ...defaultOptions, ...options } : options;
  return intl.formatTime(value, opts);
}
