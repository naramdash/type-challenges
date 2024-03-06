type MyOmitUgly<T, K extends keyof T> = {
  // [P in (keyof T extends infer Key ? Key extends K ? never : Key : never)]: T[P]
  [P in keyof T extends infer Key 
    ? Key extends string | number | symbol
      ? Key extends K
        ? never
        : Key
      : never
    : never]: T[P]
}


type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}
