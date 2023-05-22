import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/user-management/user-management.module').then(m => m.UserManagementModule)
  },
  {
    path: 'produto',
    loadChildren: () => import('./features/product/product-management.module').then(m => m.ProductManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
