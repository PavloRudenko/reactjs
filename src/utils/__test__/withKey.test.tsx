import React, { FC, PropsWithChildren, ReactNode } from 'react'
import { shallow } from 'enzyme'

import { withKey } from '..'

const LIST: Props[] = [
  { id: '1', title: 'test_1' },
  { id: '2', title: 'test_2' },
]

const withIdKey = withKey('id')
const withDefaultKey = withKey()

interface Props {
  id: string
  title: string
  children?: ReactNode
}

describe('withKey', () => {
  test('should return ul with 2 li with keys from props', () => {
    const Item: FC<Props> = () => <li />
    const wrapper = shallow(<ul>{LIST.map(withIdKey(Item))}</ul>)
    expect(wrapper.children().length).toBe(2)
    wrapper.children().map((item, i) => {
      const { id, title } = LIST[i]
      expect(item.key()).toBe(id)
      expect(item.props()).toEqual({ id, title })
    })
  })

  test('should return ul with 2 li with keys and children from props', () => {
    LIST.forEach(item => (item.children = <span>{item.title}</span>))
    const Item: FC<Props> = ({ title, children }) => (
      <li>
        {title}
        {children}
      </li>
    )
    const wrapper = shallow(<ul>{LIST.map(withIdKey(Item))}</ul>)
    expect(wrapper.children().length).toBe(2)
    wrapper.children().map((item, i) => {
      const { id, title, children } = LIST[i]
      expect(item.key()).toBe(id)
      expect(item.props()).toEqual({ id, title, children })
      expect(item.find('span').text()).toBe(title)
    })
  })

  test('should return ul with 2 li with default keys', () => {
    const Item: FC = () => <li />
    const wrapper = shallow(<ul>{LIST.map(withDefaultKey(Item))}</ul>)
    expect(wrapper.children().length).toBe(2)
    wrapper.children().map((item, i) => {
      expect(+item.key()).toBe(i)
    })
  })
})
