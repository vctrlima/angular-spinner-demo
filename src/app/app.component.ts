import { Component, OnInit } from '@angular/core';
import { LoadingService } from './shared/data-sharing/loading.service';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public loading$!: Observable<boolean>;

  constructor(private readonly loadingService: LoadingService) {}

  public ngOnInit() {
    this.watchToLoadingState();
    this.ignore();
  }

  private watchToLoadingState() {
    this.loading$ = this.loadingService.loading;
  }

  private ignore() {
    /* This function simulates the behavior of do requests and activate
     * the http interceptor like the @rpa/data-sharing does. You don't
     * need to understand that.
     */
    const tenSecondsInMilliseconds = 10 * 1000;
    interval(tenSecondsInMilliseconds).subscribe(() => {
      this.loadingService.setState(true);
      const fiveSecondsInMilliseconds = 5 * 1000;
      setTimeout(() => {
        this.loadingService.setState(false);
      }, fiveSecondsInMilliseconds);
    });
  }
}
