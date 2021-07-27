import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { User } from '../models/User';
import Swal from 'sweetalert2';


export interface AuthResponseData {
  username: string;
  password: string;
}


const AUTH_API = "https://www.psonrie.com/api/interview-test/login";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(null);


  constructor(private http: HttpClient) { }

  login(credentials): Observable<any>{
    return this.http.post<AuthResponseData>(AUTH_API, {
      username: credentials.username,
      password: credentials.password
    }
    ).pipe(
      tap(this.saveUserInfo),
      catchError(this.handleError)
    )
  }

  private handleError(error: any): Promise<any> {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Something went wrong! Maybe you didn't use right credentials?"
    })
    return Promise.reject(error.message || error);
  }

  saveUserInfo(){
    sessionStorage.removeItem('isLogged');
    sessionStorage.setItem('isLogged', 'activated')
  }

  checkIfUserLogged(){
    return sessionStorage.getItem('isLogged') ? true : false
  }

  logOut(){
    sessionStorage.clear();
  }

}
