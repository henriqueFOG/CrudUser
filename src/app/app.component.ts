import { Component } from '@angular/core';
import { GerenciamentoEstadoState } from './core/state/gerenciamento-estado.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  public loading$: boolean = false;

  constructor(private state: GerenciamentoEstadoState ){

    this.state.loading().subscribe(
      (dados: boolean) => this.loading$ = dados
    )

  }


  title = 'crudUser';
}
