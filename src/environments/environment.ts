// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDrS5PYvnwvXaEb59ehtu_wuOd9iTZkR7M',
      authDomain: 'angular-firebase-login-demo.firebaseapp.com',
      databaseURL: 'https://angular-firebase-login-demo.firebaseio.com',
      projectId: 'angular-firebase-login-demo',
      storageBucket: 'angular-firebase-login-demo.appspot.com',
      messagingSenderId: '102337937248'
 }
};
