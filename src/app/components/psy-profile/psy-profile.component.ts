import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Profile } from 'src/app/models/Profile';
import { PsiProfileService } from 'src/app/services/psi-profile-service.service';

@Component({
  selector: 'app-psy-profile',
  templateUrl: './psy-profile.component.html',
  styleUrls: ['./psy-profile.component.css']
})
export class PsyProfileComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private profileService: PsiProfileService,
    private route: Router
  ) { }

  profileInfo$: Observable<Profile> = this.activatedRoute.params.pipe(
    switchMap(res => {
      return this.profileService.getProfileById(res.id)
    }
      
    )
  )

  goBack(){
    this.route.navigate(['./mainView']);
  }

}
