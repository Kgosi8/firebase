import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), 
    provideClientHydration(withEventReplay()), 
    provideFirebaseApp(() => initializeApp({ projectId: "authentication-project-4ddb8", appId: "1:886925205825:web:6eefa6b7f1cb008ef5c1c0", storageBucket: "authentication-project-4ddb8.firebasestorage.app", apiKey: "AIzaSyByuwTPEywhpBjhaav4Qheh3HnxJb47WdI", authDomain: "authentication-project-4ddb8.firebaseapp.com", messagingSenderId: "886925205825" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};
