import { Component, EventEmitter, Output } from '@angular/core'
import { FormBuilderBaseComponent } from '../../form-builder-base.component'

@Component({
  selector: 'cs-form-builder-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent extends FormBuilderBaseComponent {
  @Output() changes: EventEmitter<Record<string, any>> = new EventEmitter()
  getChanges($event: Record<string, any>) {
    this.changes.emit($event)
  }
}
