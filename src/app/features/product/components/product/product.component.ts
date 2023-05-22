import { Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { AppState } from 'src/app/store/reducers';
import { Store, select } from '@ngrx/store';
import { selectUser, selectLoading, selectError } from '../../../../store/selectors/user.selectors';
import * as UserActions from '../../../../store/actions/user.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public users: any;

  user$ = this.store.pipe(select(selectUser));
  loading$ = this.store.pipe(select(selectLoading));
  error$ = this.store.pipe(select(selectError));

  constructor(private userService: UserService,
    private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(UserActions.getUser());
    this.fetchUsers();
  }

  fetchUsers(): void {this.user$.subscribe(dados => {this.users = dados;});}

  receberDeleteUser(id: any){
    this.store.dispatch(UserActions.deleteUser({ userId: id }));
    this.store.dispatch(UserActions.getUser());
  }
}
