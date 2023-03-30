import { ControlType } from '../enums/control-type.enum'

export type Controls = {
  controlType:
    | ControlType.AUTO_COMPLETE
    | ControlType.CHECK_BOX
    | ControlType.CHIPS
    | ControlType.DATE
    | ControlType.INPUT
    | ControlType.SELECT
  email?: boolean
  inputType?: string
  label?: string
  max?: number
  maxLength?: number
  min?: number
  minLength?: number
  placeholder?: string
  required?: boolean
  title?: string
  value?: string
}
