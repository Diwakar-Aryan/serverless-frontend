import { HttpInterceptorFn } from '@angular/common/http';

export const clientInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = 'Some Token';
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });
  return next(authReq);
};
