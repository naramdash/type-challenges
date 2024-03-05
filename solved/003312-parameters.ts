type Shift<T extends readonly any[]> = 
  T['length'] extends 0 
    ? never
    : T extends [infer Head, ...infer Tail]
      ? Tail
      : never

type MyParameters<T extends (...args: any[]) => any> = 
  T extends (...args: infer Args extends any[]) => any
    ? Args['length'] extends 0 
      ? []
      : [Args[0], ...MyParameters<(...args: Shift<Args>) => any>]
    : never
