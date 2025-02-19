import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Armor } from './armor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getHelms() {
    return this.getData('data/helms.json');
  }

  getMails() {
    return this.getData('data/mails.json');
  }

  getBraces() {
    return this.getData('data/braces.json');
  }

  getCoils() {
    return this.getData('data/coils.json');
  }

  getGreaves() {
    return this.getData('data/greaves.json');
  }

  private getData(url: string): Observable<Armor[]> {
    return this.http.get<Armor[]>(url);
  }
}