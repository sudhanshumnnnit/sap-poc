import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  spaceXdata(query): Observable<any> {
    let queryParams = {
      params: {
        launch_year: '',
        launch_success: '',
        land_success: ''
      }
    };
    if (query) {
      Object.keys(queryParams.params).forEach((key) => {
        if (query[key] !== '') {
          queryParams['params'][key] = query[key];
        } else {
          delete queryParams['params'][key];
        }
      });
    } else {
      queryParams = {
        params: null
      };
    }

    // const queryParams = {
    //   params: {
    //     appid: 'id1234',
    //     cnt: '5'
    //   }
    // };
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100', queryParams);
  }
}

