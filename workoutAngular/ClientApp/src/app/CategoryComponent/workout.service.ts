import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { category } from './Category';

@Injectable()
export class WorkoutService {
  private _url = 'http://localhost:54344//api/WorkOutWebAPI';
  constructor(private http: HttpClient) { }

  getAll(): Observable<category[]> {
    return this.http.get<category[]>(this._url);
  }

  getById(id: string): Observable<category> {
    return this.http.get<category>(this._url + `/${id}`);
  }

  save(dept: category) {
    return this.http.post(this._url, dept);
  }

  update(dept: category) {
    return this.http.put(this._url, dept);
  }

  delete(id: string) {
    return this.http.delete(this._url + `/${id}`);
  }

}
