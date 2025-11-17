import { Route } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Summary } from './summary/summary';
import { Details } from './details/details';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: 'catalog',
    component: Home,
  },
  { path: 'catalog/:id', component: Details },
  { path: 'cart', component: Cart },
  { path: 'summary', component: Summary },
];
