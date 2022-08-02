import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map } from 'rxjs';

interface Endpoints {
  api: string;
  licenseCheck: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private endpoints = new BehaviorSubject<Endpoints | null>(null);
  readonly api$ = this.endpoints.asObservable().pipe(
    filter(endpoints => !!endpoints),
    map(endpoints => endpoints?.api)
  )

  get api() {
    return this.endpoints.getValue()?.api;
  }

  constructor(private http: HttpClient) { }

  fetchEndpoints() {
    this.http.get<Endpoints>(`http://localhost:5001/decoded-license-server/us-central1/endpoints`)
      .subscribe({
        next: (endpoints) => this.endpoints.next(endpoints),
        error: () => this.endpoints.next({ api: 'http://fallback.api', licenseCheck: 'http://license.fallback.api' })
      })
  }


}
