import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { NgcsFormBuilderModule } from '@ng-cs/form-builder'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    NgcsFormBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
