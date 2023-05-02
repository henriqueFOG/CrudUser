import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { SharedModule } from '../../shared/shared.module';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    UserManagementRoutingModule,
  ],
})
export class UserManagementModule {}
