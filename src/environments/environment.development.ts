export const environment = {
  production: false,
  apiUrl: 'https://localhost:44335/api/v1',
  adb2c: {
    clientId: '',
    readScopeUrl:
      'https://uniqueshit.onmicrosoft.com/dev/uniqueshit/api/UniqueShit.Read',
    writeScopeUrl:
      'https://uniqueshit.onmicrosoft.com/dev/uniqueshit/api/UniqueShit.Write',
    scopeUrls: [
      'https://uniqueshit.onmicrosoft.com/dev/uniqueshit/api/UniqueShit.Read',
      'https://uniqueshit.onmicrosoft.com/dev/uniqueshit/api/UniqueShit.Write',
    ],
    authorityDomain: 'uniqueshit.b2clogin.com',
    signUpSignIn: 'B2C_1_signup_signin',
    signUpSignInAuthority:
      'https://uniqueshit.b2clogin.com/uniqueshit.onmicrosoft.com/B2C_1_signup_signin',
    resetPassword: 'B2C_1_password_reset',
    resetPasswordAuthority:
      'https://uniqueshit.b2clogin.com/uniqueshit.onmicrosoft.com/B2C_1_password_reset',
    editProfile: 'B2C_1_profile_edit',
    editProfileAuthority:
      'https://uniqueshit.b2clogin.com/uniqueshit.onmicrosoft.com/B2C_1_profile_edit',
  },
};
