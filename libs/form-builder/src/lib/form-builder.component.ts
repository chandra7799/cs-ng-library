import { FormGroup } from '@angular/forms'
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { FormBuilderBaseComponent } from './form-builder-base.component'
import { FormBuilderConfig } from './options/form-builder-config.options'
import { FormBuilderService } from './services/form-builder.service'

@Component({
  selector: 'ng-cs-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent
  extends FormBuilderBaseComponent
  implements OnChanges
{
  @Input() configuration?: FormBuilderConfig

  formGroup?: FormGroup

  constructor(private _formBuilderService: FormBuilderService) {
    super()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._toFormGroup()

    console.log(this.formGroup)
  }

  private async _toFormGroup(): Promise<void> {
    if (this.configuration?.controls)
      this.formGroup = await this._formBuilderService.toFormGroup(
        this.configuration?.controls
      )
  }
}
