import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { FormBuilderBaseComponent } from '../../form-builder-base.component'

@Component({
  selector: 'cs-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent extends FormBuilderBaseComponent {
  get formControl(): FormControl {
    return this.formGroup.get(this.key) as FormControl
  }
}
