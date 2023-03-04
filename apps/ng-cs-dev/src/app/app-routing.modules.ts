import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'form-builder',
    loadChildren: () =>
      import('./modules/form-builder/form-builder.module').then(
        (m) => m.FormBuilderModule
      ),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./modules/tabs/tabs.module').then((m) => m.TabsModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'form-builder',
  },
  {
    path: '**',
    redirectTo: 'form-builder',
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
