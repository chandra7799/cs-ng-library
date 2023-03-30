export const FORM_BUILDER_CONFIG = {
  controls: {
    first_name: {
      label: 'First name',
      title: 'First name',
      placeholder: 'First name',
      controlType: 'input',
      required: true,
      minLength: 3,
      value: 'c',
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
      email: true,
      value: '',
    },
    password: {
      label: 'Password',
      title: 'Password',
      placeholder: 'enter password',
      controlType: 'input',
      inputType: 'password',
      required: true,
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
    minlength: 'Input must be at least 3 characters long',
    email: 'Input must be a valid email address',
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
}
