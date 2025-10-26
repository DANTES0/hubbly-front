const AuthPath = '/permission'

export const Pages = Object.freeze({
  Login: {
    StaticPath: `${AuthPath}/login`,
    Name: 'login',
  },
  Registration: {
    StaticPath: `${AuthPath}/registration`,
    Name: 'registration',
  },
  ResetPassword: {
    StaticPath: `${AuthPath}/reset`,
    Name: 'reset',
  },
  ResetConfirmPassword: {
    StaticPath: `${AuthPath}/reset/confirm`,
    Name: 'resetConfirm',
  },
  ConfirmEmail: {
    StaticPath: `${AuthPath}/confirm`,
    Name: 'confirm',
  },
  MyEvents: {
    StaticPath: `/events/my`,
    Name: 'myevents',
  },
  CreateEvents: {
    StaticPath: `/events`,
    Name: 'create-events',
    Children: {
      MainInfo: {
        StaticPath: 'info',
        Name: 'create-events-info',
      },
      Templates: {
        StaticPath: 'templates',
        Name: 'create-events-templates',
      },
      RegistrationForm: {
        StaticPath: 'registration-form',
        Name: 'create-events-registration-form',
        Children: {
          Edit: {
            StaticPath: 'edit',
            Name: 'create-events-registration-form-edit',
          },
          Preview: {
            StaticPath: 'preview',
            Name: 'create-events-registration-form-preview',
          },
        },
      },
    },
  },
})
