import { Injectable } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { keysIn } from '@ng-cs/utils'
import { Controls } from '../options/controls.type'

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  private _formGroup: FormGroup

  constructor(private _formBuilder: FormBuilder) {
    this._formGroup = this._formBuilder.group({})
  }

  toFormGroup(controls: Record<string, Controls>): FormGroup {
    console.log('controls', controls)

    keysIn(controls).map((key) => {
      return key + ''
    })

    return {} as FormGroup
  }
}
