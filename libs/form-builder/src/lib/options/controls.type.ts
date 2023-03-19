import { ControlType } from '../enums/contro-type.enum'

export type Controls = {
  controlType:
    | ControlType.AUTO_COMPLETE
    | ControlType.CHECK_BOX
    | ControlType.CHIPS
    | ControlType.DATE
    | ControlType.INPUT
    | ControlType.SELECT

  inputType?: string
  label?: string
  min?: string
  max?: string
  placeholder?: string
  required?: boolean
  title?: string
  value?: string
}
