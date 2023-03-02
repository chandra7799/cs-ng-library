import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormBuilderComponent } from './form-builder.component'
import { DateComponent } from './components/date/date.component'
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component'
import { InputComponent } from './components/input/input.component'
import { SelectComponent } from './components/select/select.component'
import { CheckBoxComponent } from './components/check-box/check-box.component'
import { TemplateComponent } from './components/template/template.component'
import { NgcsUtilsModule } from '@ng-cs/utils'

@NgModule({
  imports: [CommonModule, NgcsUtilsModule],
  declarations: [
    FormBuilderComponent,
    DateComponent,
    AutoCompleteComponent,
    InputComponent,
    SelectComponent,
    CheckBoxComponent,
    TemplateComponent,
  ],
  exports: [
    FormBuilderComponent,
    DateComponent,
    AutoCompleteComponent,
    InputComponent,
    SelectComponent,
    CheckBoxComponent,
    TemplateComponent,
  ],
})
export class NgcsFormBuilderModule {}
