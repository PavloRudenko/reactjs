import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'

import Dropdown from './Dropdown'

const createElement = () =>
  shallow(
    <Dropdown button={<button>test</button>}>
      <div />
    </Dropdown>
  )

describe('<Dropdown />', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

  beforeEach(() => {
    wrapper = createElement()
  })

  test('should render', () => {
    expect(wrapper).toBeDefined()
  })
})
