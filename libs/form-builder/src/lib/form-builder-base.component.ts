import { ControlType } from './enums/contro-type.enum'
import { AbstractControl, FormControl, FormGroup } from '@angular/forms'
import { Component, Input } from '@angular/core'
import { Controls } from './options/controls.type'
import { FormBuilderConfig } from './options/form-builder-config.options'

@Component({
  template: ``,
})
export abstract class FormBuilderBaseComponent {
  private _configuration: any

  @Input()
  get configuration(): FormBuilderConfig {
    return this._configuration
  }
  set configuration(value: FormBuilderConfig) {
    this._configuration = value
  }
  @Input()
  control: Controls = {} as Controls

  @Input() controlSize: 'sm' | 'lg' = 'sm'


  @Input()
  formGroup: FormGroup<any> = {} as FormGroup<any>

  @Input() ControlType: string =
    ControlType.AUTO_COMPLETE ||
    ControlType.CHECK_BOX ||
    ControlType.CHIPS ||
    ControlType.DATE ||
    ControlType.INPUT ||
    ControlType.SELECT ||
    ControlType.TEXT_AREA

  @Input() inputType: 'text' | 'number' | 'email' | 'password' = 'text'

  @Input() key = ''

  @Input() label? = ''

  @Input() min: number | undefined

  @Input() minLength: number | undefined

  @Input() max: number | undefined

  @Input() maxLength: number | undefined

  @Input() placeholder? = ''

  @Input() required? = false

  @Input() stack: 'row' | 'column' = 'column'

  @Input() value?: string | number
}
