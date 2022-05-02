import React from 'react'
import { shallow } from 'enzyme'

import { pickFromSyntheticEvent } from '..'

const fn = jest.fn()

describe('pickFromSyntheticEvent', () => {
  test("should return 'Hello World' in input value onChange event and call fn", () => {
    const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value')
    const wrapper = shallow(
      <input
        onChange={getValue(value => {
          expect(value).toBe('Hello World')
          fn()
        })}
      />
    )
    wrapper.simulate('change', { currentTarget: { value: 'Hello World' } })
    expect(fn.mock.calls.length).toBe(1)
  })
})
