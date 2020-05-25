import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserMobileReg } from '../objects/usermobilereg';
import { catchError, retry } from 'rxjs/operators';
import { HttpInterceptor } from '../http.interceptor';

@Injectable({
  providedIn: 'root'
})
export class UserregistrationService {

  public userRegiUrl:string='finance/userReg/save';
  public getUserRegDetailsUrl:string='finance/userReg/getUserDetails';

  constructor(private http:HttpInterceptor) { }
  

  saveuserDetails(usermobilereg:UserMobileReg):Observable<UserMobileReg>
  {
    let body=JSON.stringify(usermobilereg);
    return this.http.post(this.userRegiUrl, body, null);
    
  }

  getUserDetails():Observable<UserMobileReg[]>
  {
    return this.http.get(this.getUserRegDetailsUrl);
  }

  
}
