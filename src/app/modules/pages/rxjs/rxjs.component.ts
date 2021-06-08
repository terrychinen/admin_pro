import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {
  public intervalSubs: Subscription

  constructor() {
    this.intervalSubs = this.returnInterval().subscribe(
      (value) => console.log(value)
    );

    /* this.returnObservable().pipe(
      retry(1)
    ).subscribe(
      value => console.log('Subs:', value),
      err => console.warn('Error', err),
      () => console.info('Obs end')
    ); */
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();    
  }


  returnInterval(): Observable<number> {
    return interval(500).pipe(
      map(value => value + 1),
      filter(value => (value % 2 === 0) ? true : false),      
      //take(10)
    );
  }

  returnObservable(): Observable<number> {
    let i = 0;
    return new Observable<number>(observer => { 
      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if(i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if(i === 2) {
          observer.error('Data error');
        }
      }, 1000);
    });
  }

}
