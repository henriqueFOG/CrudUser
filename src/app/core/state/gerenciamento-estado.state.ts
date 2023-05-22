import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GerenciamentoEstadoState {

  public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  setTrueLoading () {
    this.loading$.next(true);
  }

  setFalseLoading(){
    this.loading$.next(false);
  }

  getLoading(): boolean{
    return this.loading$.getValue();
  }

  loading(){
    return this.loading$.asObservable();
  }

}