import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class LazyloadGuard implements CanLoad {

  constructor(private service:AuthService){}
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.service.session){
        return true;
      }
      else{
        window.alert("Please Login to Access the Dashboard.");
        return false;
      }
  }
}
