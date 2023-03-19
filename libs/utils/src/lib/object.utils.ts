import { isObject, keysIn as _keysIn } from 'lodash'

export function keysIn(object: any): string[] {
  if (!isObject(object)) return []
  return _keysIn(object) as string[]
}
