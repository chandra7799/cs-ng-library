import { Component, Input } from '@angular/core'

@Component({
  selector: 'ng-cs-form-builder-base',
  template: '',
  styleUrls: [],
})
export abstract class FormBuilderBaseComponent {
  @Input() placeHolder = ''
  @Input() label = ''
}
