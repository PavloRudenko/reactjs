export const addEventListenerWithDispose = <
  K extends keyof HTMLElementEventMap
>(
  element: HTMLElement,
  name: K,
  handler: (e: HTMLElementEventMap[K]) => void
) => {
  element.addEventListener(name, handler)
  return () => element.removeEventListener(name, handler)
}
