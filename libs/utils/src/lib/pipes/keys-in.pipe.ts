import { keysIn } from '../object.utils'
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'keysIn',
})
export class KeysInPipe implements PipeTransform {
  transform(object: object): string[] {
    return keysIn(object)
  }
}
