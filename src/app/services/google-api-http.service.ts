import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GoogleApiHttpService {
  private readonly URL = 'https://www.googleapis.com/';

  constructor(private http: HttpClient) {}

  getBooksVolumes(params: any = {}) {
    return this.http
      .get(this.URL + 'books/v1/volumes', { params })
      .pipe();
  }
}
