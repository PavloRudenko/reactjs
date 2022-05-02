/**
 * @jest-environment jsdom
 */
import { addEventListenerWithDispose } from '..'

const fn = jest.fn()

describe('addEventListenerWithDispose', () => {
  test('should add event click on button, call it 2 times and remove event', () => {
    const button = document.createElement('button')
    const dispose = addEventListenerWithDispose(button, 'click', fn)
    const evt = new Event('click')
    button.dispatchEvent(evt)
    button.dispatchEvent(evt)
    expect(fn.mock.calls.length).toBe(2)
    dispose()
    button.dispatchEvent(evt)
    expect(fn.mock.calls.length).toBe(2)
  })
})
