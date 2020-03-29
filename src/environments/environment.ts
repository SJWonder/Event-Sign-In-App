// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import * as firebase from 'firebase';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAzS8OmjRwMeqX-Pz6-XJfT77b5ww8jXIo',
    authDomain: 'classmanagement1-2a621.firebase.com',
    databaseURL: 'https://classmanagement1-2a621.firebaseio.com',
    projectId: 'classmanagement1-2a621',
    storageBucket: 'classmanagement1-2a621.appspot.com',
    messagingSenderId: '1024998610187',
    appId: '1:1024998610187:web:58e1036356c8e9c2a03e0e'
  }
  // firebase.initializeApp(firebaseConfig)
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
