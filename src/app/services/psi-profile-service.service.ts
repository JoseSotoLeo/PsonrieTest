import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/Profile';


const PROFILE_API = "https://www.psonrie.com/api/interview-test/psychologist";


@Injectable({
  providedIn: 'root'
})
export class PsiProfileService {

  constructor(private http: HttpClient) { }


  public getAllProfiles(): Observable<any>{
    return this.http.get<Profile[]>(PROFILE_API);
  }

  public getProfileById(id){
    return this.http.get<Profile>(`${PROFILE_API}/${id}`);
  }
}
