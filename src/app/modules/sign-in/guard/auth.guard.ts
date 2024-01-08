import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const AuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ) => {
        if(window.localStorage.getItem('userData')) {
            return true;
        }
        inject(Router).navigate(['/sign-in']);
        return false;
}