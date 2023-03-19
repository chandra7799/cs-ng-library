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
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormBuilderService } from './services/form-builder.service'

@NgModule({
  imports: [CommonModule, NgcsUtilsModule, FormsModule, ReactiveFormsModule],
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
  providers: [FormBuilderService],
})
export class NgcsFormBuilderModule {}
