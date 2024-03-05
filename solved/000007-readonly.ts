// your answers
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
