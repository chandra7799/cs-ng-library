import { ControlType, FormBuilderConfig } from '@ng-cs/form-builder'
export const FORM_BUILDER_CONFIG: FormBuilderConfig = {
  controls: {
    first_name: {
      label: 'First name',
      title: 'First name',
      placeholder: 'First name',
      controlType: ControlType.INPUT,
      minLength: 3,
      value: 'c',
    },
    middle_name: {
      label: 'Middle Name',
      title: 'Middle name',
      placeholder: 'Middle name',
      controlType: ControlType.INPUT,
      value: '',
    },
    last_name: {
      label: 'Last name',
      title: 'Last name',
      placeholder: 'Last name',
      controlType: ControlType.INPUT,
      required: true,
      value: '',
    },

    email: {
      label: 'Email',
      title: 'Email',
      placeholder: 'Email',
      controlType: ControlType.INPUT,
      inputType: 'email',
      required: true,
      email: true,
      value: '',
    },
    password: {
      label: 'Password',
      title: 'Password',
      placeholder: 'enter password',
      controlType: ControlType.INPUT,
      inputType: 'password',
      required: true,
    },
    phone_number: {
      label: 'Phone number',
      title: 'Phone number',
      placeholder: 'Phone number',
      controlType: ControlType.INPUT,
      inputType: 'number',
      value: '',
    },
  },
  validatorMessages: {
    required: 'Input required',
    minlength: 'Input must be at least 3 characters long',
    email: 'Input must be a valid email address',
  },
  controlSize: 'sm',
  layoutContainerClass: 'container',
  layout: {
    'row-0': {
      container: '',
      first_name: {
        control: 'col-sm-8',
        label: 'col-sm-4',
        width: 'col-sm-4',
      },
      middle_name: {
        control: 'col-sm-8',
        label: 'col-sm-4',
        width: 'col-sm-4',
      },
      last_name: {
        control: 'col-sm-8',
        label: 'col-sm-4',
        width: 'col-sm-4',
      },
    },
    'row-1': {
      container: '',
      email: {
        width: 'col-sm-4',
      },
      password: {
        width: 'col-sm-4',
      },
      phone_number: {
        control: 'col-sm-8',
        label: 'col-sm-4',
        width: 'col-sm-4',
      },
    },
  },
  chips: {},
}
