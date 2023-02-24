import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FormBuilderRoutingModule } from './form-builder-routing.module'
import { FormBuilderComponent } from '../form-builder/form-builder.component'
import { HttpClientModule } from '@angular/common/http'
import { NgcsFormBuilderModule } from '@ng-cs/form-builder'

@NgModule({
  declarations: [FormBuilderComponent],
  imports: [
    CommonModule,
    FormBuilderRoutingModule,
    NgcsFormBuilderModule,
    HttpClientModule,
  ],
})
export class FormBuilderModule {}
