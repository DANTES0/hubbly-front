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
    StaticPath: `/events/create`,
    Name: 'create-events',
    Children: {
      MainInfo: {
        StaticPath: `/info`,
        Name: 'info',
      },
      Templates: {
        StaticPath: '/templates',
        Name: 'templates',
      },
    },
  },
})
