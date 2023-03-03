// export function checkLogoIsValid(value: string): value is ETechLogosPaths {
//   return Object.values<string>(ETechLogosPaths).includes(value);
// }

export function filterArrayAgainstEnum<T extends Record<string, string>>(
  enumObj: T,
  arr: readonly string[]
): T[keyof T][] {
  return arr.filter((value) => Object.values(enumObj).includes(value)) as T[keyof T][];
}
