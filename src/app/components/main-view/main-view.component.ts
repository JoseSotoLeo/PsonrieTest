import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/models/Profile';
import { AuthService } from 'src/app/services/auth-service.service';
import { PsiProfileService } from 'src/app/services/psi-profile-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent{

  constructor(
    private profileService: PsiProfileService,
    private authService: AuthService,
    private route: Router
  ) { }

  profiles$: Observable<Profile[]> = this.profileService.getAllProfiles();

  goToProfile(id){
    this.route.navigate([`profiles/${id}`]);
  }

  logout(){
    this.authService.logOut();
    Swal.fire({
      icon: 'success',
      title: 'Bye!',
      text: 'Have fun in the real world and see you tomorrow!',
    })
    this.route.navigate(['/']);
  }

}
