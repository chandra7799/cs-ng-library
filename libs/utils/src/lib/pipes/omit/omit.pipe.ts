import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'omit',
})
export class OmitPipe implements PipeTransform {
  transform(inputObject: any, itemsToRemove: string[] | string): unknown {
    console.log(itemsToRemove)

    if (isNaN(itemsToRemove)) return inputObject
  }
}
