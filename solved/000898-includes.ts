type Equal<T1, T2> = 
  (<T>() => T extends T1 ? 1 : 2) extends 
    (<T>() => T extends T2 ? 1 : 2) 
  ? true 
  : false

type Includes<T extends readonly any[], U> = T extends [infer Head, ...infer Tail]
  ? Equal<Head, U> extends true
    ? true
    : Includes<Tail, U>
  : false
