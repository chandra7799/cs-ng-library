import { Component, Input, OnInit } from '@angular/core'
import { FormBuilderBaseComponent } from './form-builder-base.component'

@Component({
  selector: 'ng-cs-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent extends FormBuilderBaseComponent {
  @Input() configuration: any
}
