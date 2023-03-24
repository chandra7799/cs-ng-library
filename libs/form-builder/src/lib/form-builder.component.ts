import { FormBuilder, FormGroup } from '@angular/forms'
import { Component, Input, OnInit } from '@angular/core'
import { FormBuilderBaseComponent } from './form-builder-base.component'
import { FormBuilderConfig } from './options/form-builder-config.options'
import { FormBuilderService } from './services/form-builder.service'

@Component({
  selector: 'cs-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent
  extends FormBuilderBaseComponent
  implements OnInit
{
  @Input() configuration?: FormBuilderConfig

  formGroup: FormGroup

  constructor(
    private _formBuilderService: FormBuilderService,
    private _formBuilder: FormBuilder
  ) {
    super()
    this.formGroup = this._formBuilder.group({})
  }

  ngOnInit() {
    this._toFormGroup()
  }

  private _toFormGroup(): void {
    if (!this.configuration?.controls) return

    this.formGroup = this._formBuilderService.toFormGroup(
      this.configuration?.controls
    )
  }
}
