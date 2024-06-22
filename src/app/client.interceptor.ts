import { HttpInterceptorFn } from '@angular/common/http';
import axios from 'axios';

export const clientInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = localStorage.getItem('tokenId') || null;
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });
  return next(authReq);
};

axios.interceptors.request.use(config => {
  const authToken = localStorage.getItem('tokenId');
  if(authToken) {
    config.headers.Authorization = `Bearer ${authToken}`
  }
  return config;
})
