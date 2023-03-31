import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FORM_BUILDER_CONFIG } from './assets/form-builder.const'
@Component({
  selector: 'ng-cs-dev-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: [],
})
export class FormBuilderComponent implements OnInit {
  configuration: any
  isFormValid = false
  formValue: Record<string, any> = {}
  constructor(private _http: HttpClient) {}
  ngOnInit(): void {
    this._getConfigData()
  }

  private _getConfigData(): void {
    this.configuration = FORM_BUILDER_CONFIG
  }

  getChanges($event: Record<string, any>) {
    this.formValue = $event
  }
  getFormStatus($event: boolean) {
    this.isFormValid = $event
  }
  onFormSubmit() {
    console.log(this.formValue)
  }
}
