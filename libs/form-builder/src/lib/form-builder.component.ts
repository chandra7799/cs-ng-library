import { Controls } from './options/controls.type'
import { FormBuilder } from '@angular/forms'
import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormBuilderService } from './services/form-builder.service'
import { FormBuilderBaseComponent } from './form-builder-base.component'
import { isNil } from 'lodash'

@Component({
  selector: 'cs-form-builder-lib',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent
  extends FormBuilderBaseComponent
  implements OnInit
{
  @Output() changes: EventEmitter<Record<string, any>> = new EventEmitter()

  @Output() formValid: EventEmitter<boolean> = new EventEmitter()
  constructor(
    private _formBuilderService: FormBuilderService,
    private _formBuilder: FormBuilder
  ) {
    super()
    this.formGroup = this._formBuilder.group({})
  }

  ngOnInit(): void {
    this._toFormGroup(this?.configuration?.controls)
  }

  /**
   * Initialize the form group based on the configuration settings.
   *
   * 1. Get the controls from the configuration.
   * 2. If there are no controls, exit.
   * 3. Create a form group from the controls.
   */

  private _toFormGroup(controls: Record<string, Controls>) {
    if (isNil(controls)) return
    this.formGroup = this._formBuilderService.toFormGroup(controls)
  }

  getChanges($event: Record<string, any>) {
    this.changes.emit($event)
    this.formValid.emit(this.formGroup.valid)
  }
}
