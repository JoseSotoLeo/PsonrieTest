import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth-service.service";

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private route: Router){}

      canActivate() {
        return this.authService.checkIfUserLogged() ? true : this.route.navigate(['/login'])
      }
  }