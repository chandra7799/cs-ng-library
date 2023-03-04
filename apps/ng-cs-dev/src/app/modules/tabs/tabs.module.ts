import { TabsRoutingModule } from './tabs-routing.module'
import { NgCsTabsModule } from '@ng-cs/tabs'
import { TabsComponent } from '../tabs/tabs.component'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [TabsComponent],
  imports: [CommonModule, TabsRoutingModule, NgCsTabsModule],
})
export class TabsModule {}
