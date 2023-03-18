import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
@Component({
  selector: 'ng-cs-dev-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: [],
})
export class FormBuilderComponent implements OnInit {
  configuration: any 
  constructor(private _http: HttpClient) {}
  ngOnInit(): void {
    this.getConfigData()
  }

  getConfigData(): void {
    this._http
      .get('app/modules/form-builder/assets/form-builder.json')
      .subscribe((data) => {
        this.configuration = data
      })
  }
}
