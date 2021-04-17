import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/internal/Observable';
//import { map } from 'rxjs/Operator';
import {isNullOrUndefined} from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private htttp: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  setToken(){}

  getToken(){
    return "token";
  }

}
