import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) {}

  URL="http://localhost:3000/resto"

  getRestoList():any{

    return this._http.get(this.URL)

  }

  //add resturant
  addResto(data:any):any{

    return  this._http.post(this.URL,data)
    
  }


}
