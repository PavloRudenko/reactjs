import React from 'react'
import { shallow } from 'enzyme'

import Dropdown from './Dropdown'

describe('<Dropdown />', () => {
  const wrapper = shallow(
    <Dropdown button={<button>test</button>}>
      <div />
    </Dropdown>
  )

  test('should render', () => {
    expect(wrapper.find('.dropdown').length).toBe(1)
    expect(wrapper.find('button').length).toBe(1)
  })

  test('should open and close', () => {
    expect(wrapper.find('ul.list').length).toBe(0)
    wrapper.find('#test').simulate('click')
    expect(wrapper.find('ul.list').length).toBe(1)
    wrapper.find('#test').simulate('click')
    expect(wrapper.find('ul.list').length).toBe(0)
    wrapper.find('#test').simulate('click')
    expect(wrapper.find('ul.list').length).toBe(1)
    wrapper.find('ul.list').simulate('click')
    expect(wrapper.find('ul.list').length).toBe(0)
  })

  test('create snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('create snapshot with opened dropdown', () => {
    wrapper.find('#test').simulate('click')
    expect(wrapper).toMatchSnapshot()
  })
})
