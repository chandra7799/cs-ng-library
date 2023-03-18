import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OmitPipe } from './pipes/omit.pipe'
import { KeysInPipe } from './pipes/keys-in.pipe'

@NgModule({
  imports: [CommonModule],
  declarations: [OmitPipe, KeysInPipe],
  exports: [OmitPipe, KeysInPipe],
})
export class NgcsUtilsModule {}
