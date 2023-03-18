import { Pipe, PipeTransform } from '@angular/core'
import { isArray, isObject, isString } from 'lodash'
@Pipe({
  name: 'omit',
})
export class OmitPipe implements PipeTransform {
  transform(obj: any, propList: string[] | string) {
    const newObj = { ...obj }
    const result: any = {}

    if (isString(propList) && isObject(obj)) {
      for (const key in obj) {
        if (key !== propList) {
          result[key] = newObj[key]
        }
      }
      return result
    }

    if (isArray(propList) && isObject(obj)) {
      Object.keys(obj).forEach((key) => {
        if (!propList.includes(key)) {
          result[key] = newObj[key]
        }
      })
      return result
    }
    return obj
  }
}
