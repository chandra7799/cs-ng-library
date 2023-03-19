import { Injectable } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { keysIn } from '@ng-cs/utils'
import { Controls } from '../options/controls.type'

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  private _formGroup: FormGroup<any>

  constructor(private _formBuilder: FormBuilder) {
    this._formGroup = this._formBuilder.group({})
  }

  public toFormGroup(controls: Record<string, Controls>): FormGroup<any> {
    keysIn(controls).map((key) => {
      this._formGroup.addControl(
        key,
        this._formBuilder.control(controls[key].value || '')
      )
    })
    return this._formGroup
  }
}
