// Task 1
type TMyConcatStr = (...str: string[]) => string

export const myConcatStr: TMyConcatStr = (...str) => str.join(' ')

const MyHometask: IMyHometask = {
  howIDoIt: 'I Do It Wel',
  someArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel' }, { someArray: ['string one', 23] }],
}

type StrOrNumber = string | number

// Task 2
interface IMyHometask {
  howIDoIt: string
  someArray: StrOrNumber[]
  withData: [Pick<IMyHometask, 'howIDoIt'>, Pick<IMyHometask, 'someArray'>]
}

// Task 3
interface MyArray<T> {
  [N: number]: T

  map<U>(callback: (el: T, index: number, array: MyArray<T>) => U): MyArray<U>

  reduce(
    callback: (accumulator: T, value: T, index: number, array: MyArray<T>) => T,
    initialValue?: T
  ): T
}

const myArray: MyArray<string> = ['1', '2', '3']

const test1 = myArray.map((el, i, arr) => `${el} + 1 + ${i}, ${arr[2]}`)
const test2 = myArray.map((el, i) => el + 1 + i)
const test3 = myArray.reduce((acc, value) => acc + value)

// Task 4
type MyPartial<T> = {
  [N in keyof T]?: T[N]
}

const myPartialHometask: MyPartial<IMyHometask> = {
  howIDoIt: 'test',
}

type MyPartialDeep<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartialDeep<T[N]> : T[N]
}

const myPartialDeepMyHometask: MyPartialDeep<IMyHometask> = {
  withData: [{ howIDoIt: '123' }],
}

// ----------------------------------- testing -----------------------------------

const readOnlyMyHometask: MyReadOnly<IMyHometask> = MyHometask

MyHometask.howIDoIt = '123'
readOnlyMyHometask.withData[0].howIDoIt = '123'

type MyReadOnly<T> = {
  readonly [K in keyof T]: T[K]
}

type MyPick<T, K extends keyof T> = {
  [N in K]: T[N]
}

const myPickHomeTask: MyPartial<MyPick<IMyHometask, 'someArray' | 'howIDoIt'>> =
  { someArray: [] }

type MyOmit<T, K extends keyof T> = {
  [N in K]: Exclude<keyof T, N>
}

const myOmitMyHomeTask: Omit<IMyHometask, 'withData'> = {
  someArray: [],
  howIDoIt: '',
}

type MyReadOnlyDeep<T> = {
  readonly [K in keyof T]: T[K] extends object ? MyReadOnlyDeep<T[K]> : T[K]
}

const myReadOnlyDeep: MyReadOnlyDeep<IMyHometask> = MyHometask
