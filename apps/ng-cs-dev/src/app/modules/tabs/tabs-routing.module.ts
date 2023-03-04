import { TabsComponent } from './../../../../../../libs/tabs/src/lib/tabs.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
