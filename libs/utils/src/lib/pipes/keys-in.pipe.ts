import { keysIn } from '../object.utils'
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'keysIn',
})
export class KeysInPipe implements PipeTransform {
  transform(object: any): string[] {
    return keysIn(object)
  }
}
