export const FORM_BUILDER_CONFIG = {
  controls: {
    first_name: {
      label: 'First name',
      title: 'First name',
      placeholder: 'First name',
      controlType: 'input',
      required: true,
      value: 'Chandra',
    },
    middle_name: {
      label: 'Middle Name',
      title: 'Middle name',
      placeholder: 'Middle name',
      controlType: 'input',
      value: '',
    },
    last_name: {
      label: 'Last name',
      title: 'Last name',
      placeholder: 'Last name',
      controlType: 'input',
      required: true,
      value: '',
    },

    email: {
      label: 'Email',
      title: 'Email',
      placeholder: 'Email',
      controlType: 'input',
      inputType: 'email',
      required: true,
      value: '',
    },
    phone_number: {
      label: 'Phone number',
      title: 'Phone number',
      placeholder: 'Phone number',
      controlType: 'input',
      inputType: 'number',
      value: '',
    },
  },
  validatorMessages: {
    required: 'Input required',
  },
  controlSize: '',
  layout: {
    container: 'container',
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
      phone_number: {
        control: 'col-sm-8',
        label: 'col-sm-4',
        width: 'col-sm-4',
      },
    },
  },
}
