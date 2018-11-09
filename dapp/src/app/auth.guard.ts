// import { Injectable } from '@angular/core';

// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// import { Observable } from 'rxjs';

// import { ServiceService } from './service.service';

// import {Router} from '@angular/router';

// @Injectable()

// export class AuthGuard implements CanActivate {

//   constructor(private auth: ServiceService,

//     private myRoute: Router){

//   }

//   canActivate(

//     next: ActivatedRouteSnapshot,

//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

//     if(this.auth.isLoggednIn()){

//       return true;

//     }else{

//       this.myRoute.navigate(["arul"]);

//       return false;

//     }

//   }

// }