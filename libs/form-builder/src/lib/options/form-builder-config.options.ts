import { Chips } from './chips.type'
import { Controls } from './controls.type'
import { Layout } from './layout.type'

export type FormBuilderConfig = {
  controls: Record<string, Controls>
  validatorMessages?: Record<string, string>
  controlSize?: 'sm' | 'lg'
  layout: Record<string, Layout>
  chips: Record<string, Chips>
}
