import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Output() deleteUserEvent = new EventEmitter<number>();
  @Input() users: any;

  displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(
    private breakpointObserver: BreakpointObserver,
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

  deleteUser(id: any): void {
    this.deleteUserEvent.emit(id);
  }
}
