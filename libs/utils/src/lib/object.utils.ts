import { isObject, keysIn as _keysIn } from 'lodash'

// eslint-disable-next-line @typescript-eslint/ban-types
export function keysIn(object: any): string[] {
  if (!isObject(object)) return []
  return _keysIn(object)
}
