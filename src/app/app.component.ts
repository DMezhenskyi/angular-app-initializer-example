import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { switchMap } from 'rxjs';
import { ConfigService } from './initializer/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app-initializer-example';
  constructor(private http: HttpClient, private config: ConfigService) {}

  ngOnInit() {
    // this.config.api$.pipe(
    //   switchMap(url => this.http.get(`${url}/users`))
    // ).subscribe()
    this.http.get(`${this.config.api}/users`).subscribe()
  }

}
