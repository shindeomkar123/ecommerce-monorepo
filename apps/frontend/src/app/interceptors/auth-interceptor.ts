import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Session } from '../services/session/session';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const sessionService = inject(Session);
  const token = sessionService.token();
  if (!token) next(req);
  const clone = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
  return next(clone);
};
