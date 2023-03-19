import { Injectable } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
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
        new FormControl(controls[key].value || '', [
          controls[key]?.required
            ? Validators.required
            : Validators.nullValidator,
        ])
      )
    })
    return this._formGroup
  }
}
