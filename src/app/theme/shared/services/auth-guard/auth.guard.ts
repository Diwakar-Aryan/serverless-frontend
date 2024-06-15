import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { inject } from '@angular/core';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);

  return authService.auth.isAuthenticated$.pipe(
    map(isAuthenticated => {
      if (!isAuthenticated) {
        authService.auth.loginWithRedirect();
        return false;
      }
      return true;
    })
  );
};
