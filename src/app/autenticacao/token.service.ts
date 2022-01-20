import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  getToken(){
    return localStorage.getItem(KEY) ?? ''
  }

  saveToken(token: string){
    localStorage.setItem(KEY,token)
  }

  deleteToken(){
    localStorage.removeItem(KEY)
  }

  haveToken(){
    return  !!this.getToken()
  }

  constructor() { }
}
