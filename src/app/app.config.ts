import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { AuthService, provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '../environments/environments';
import { provideHttpClient } from '@angular/common/http';
import { clientInterceptor } from './client.interceptor';
import { HeaderComponent } from './theme/layout/header/header.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,  withComponentInputBinding()), provideClientHydration(), provideAuth0({
    domain: environment.auth.domain,
    clientId: environment.auth.clientId,
    authorizationParams:{
      redirect_uri: 'http://localhost:4200/account'
    }

  }),
  provideHttpClient(),

 ]
};
