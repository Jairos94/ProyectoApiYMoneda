import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../interface/login';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private baseUrlDb: string = environment.baseUrlDataBase;


  constructor(private http: HttpClient) { }

  getUser(user: string, pass: string):Observable<Login>{
    const params = new HttpParams()
    .set('user', user)
    .set('pass', pass);
    return this.http.get<Login>(`${this.baseUrlDb}Loging`,{params});
  }
}
