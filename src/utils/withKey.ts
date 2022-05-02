import { ComponentType, createElement } from 'react'

export const withKey =
  (key?: string) =>
  <E extends {}, T extends ComponentType<E>>(component: T) =>
  (props: E, index: number) =>
    createElement(component, {
      ...props,
      key: key ? props[key as keyof E] : index,
    })
