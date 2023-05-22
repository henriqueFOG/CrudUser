import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { GerenciamentoEstadoState } from 'src/app/core/state/gerenciamento-estado.state';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Output() deleteUserEvent = new EventEmitter<number>();
  @Input() users: any;

  displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private state: GerenciamentoEstadoState
    ) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.displayedColumns = ['id', 'name', 'actions'];
      } else {
        this.displayedColumns = ['id', 'name', 'actions'];
      }
    });

  }

  




  editUser(id: number): void {
    // Navegue para a rota de edição do usuário
  }

  editar(){
    
   
  }

  deleteUser(id: any): void {
    this.state.setTrueLoading();
    setTimeout(() => {
      this.deleteUserEvent.emit(id);
      this.state.setFalseLoading();
    },1000)
   
  }
}
