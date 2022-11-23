import { Component, EventEmitter } from '@angular/core';
import { CharitiesApiService } from './utils/charities-api.service';
import { OnInit, Output } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'charity-app-production-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private api: CharitiesApiService) {}

  offlineEvent?: Observable<Event>;
  onlineEvent?: Observable<Event>;

  offlineErrorInfo = {
    userOnline: true,
    userMessage: ''
  };

  ngOnInit(): void {
    this.handleAppConnectivityChanges();
  }

  @Output()
  connectivityChangeEvent = new EventEmitter();

  detectConnectivityChange() {
    this.connectivityChangeEvent.emit(this.offlineErrorInfo);
  }

  private handleAppConnectivityChanges(): void {
    this.onlineEvent = fromEvent(window, 'online');
    this.offlineEvent = fromEvent(window, 'offline');

    this.onlineEvent.subscribe((e) => {
      // handle online mode
      console.log('Online...');
    });

    this.offlineEvent.subscribe((e) => {
      // handle offline mode
      console.log(this.offlineErrorInfo);
      this.offlineErrorInfo = {
        ...this.offlineErrorInfo,
        userOnline: false,
        userMessage: `🦖 No internet connection. Please check your network 🦖`
      };
      this.detectConnectivityChange();

      console.log(this.offlineErrorInfo);
      // return errorInfo;
      // Emit this info when the users connection is offline
    });
  }
}
