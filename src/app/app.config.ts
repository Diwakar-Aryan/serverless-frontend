import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '../environments/environments';
import { provideHttpClient } from '@angular/common/http';
import { clientInterceptor } from './client.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAuth0({
    domain: environment.auth.domain,
    clientId: environment.auth.clientId,
    authorizationParams: {
      redirect_uri: 'http://localhost:4200/home'
    }
  }),
  provideHttpClient(),]
};
