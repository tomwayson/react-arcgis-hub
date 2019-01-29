import { t, formatTime } from './intl'

describe('intl', () => {
  describe('t', () => {
    it('returns message id when no intl is passed', () => {
      expect(t('message.id')).toEqual('message.id')
    })
  })
  describe('formatTime', () => {
    it('calls toLocaleString() when no intl is passed', () => {
      const d = 1548725792992
      const spy = jest.spyOn(Date.prototype, 'toLocaleString')
      formatTime(d)
      expect(spy.mock.calls.length).toEqual(1)
    })
  })
})
