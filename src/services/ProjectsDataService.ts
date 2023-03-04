/**
 * @param enumObj The Enum Type you wish to validate against
 * @param arr The Array you wish to compare to an Emum
 * @returns An Array of strings filtered against your Enum
 */
export function filterArrayAgainstEnum<T extends Record<string, string>>(
  enumObj: T,
  arr: readonly string[]
): T[keyof T][] {
  return arr.filter((value) =>
    Object.values(enumObj).includes(value)
  ) as T[keyof T][];
}
