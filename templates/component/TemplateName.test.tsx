import React from 'react'
import { shallow } from 'enzyme'

import TemplateName from './TemplateName'

describe('<TemplateName />', () => {
  test('should render', () => {
    const wrapper = shallow(<TemplateName />)
    expect(wrapper).toBeDefined()
  })
})
