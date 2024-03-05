// your answers
type MyAwaited<T extends { then: (onfulfilled: (arg: any) => any) => any } > = 
  T extends { then: (onfulfilled: (arg: infer Value) => any) => any }
  ? Value extends Promise<any> 
    ? MyAwaited<Value> 
    : Value
  : never
