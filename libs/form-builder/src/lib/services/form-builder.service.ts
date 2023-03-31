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

  /**
   * @description
   * Creates a new FormGroup instance from a controls object
   * @param controls - the controls object
   * @returns FormGroup
   */
  public toFormGroup(controls: Record<string, Controls>): FormGroup<any> {
    keysIn(controls).map((key: string) => {
      const control: Controls = controls[key]
      const [email, max, min, minLength, maxLength, required] = [
        control.email,
        control.max,
        control.min,
        control.minLength,
        control.maxLength,
        control.required,
      ]
      this._formGroup.addControl(
        key,
        new FormControl(controls[key].value || '', [
          email ? Validators.email : Validators.nullValidator,
          max ? Validators.max(max) : Validators.nullValidator,
          min ? Validators.min(min) : Validators.nullValidator,
          maxLength
            ? Validators.maxLength(maxLength)
            : Validators.nullValidator,
          minLength
            ? Validators.minLength(minLength)
            : Validators.nullValidator,
          required ? Validators.required : Validators.nullValidator,
        ])
      )
    })
    return this._formGroup
  }
}
