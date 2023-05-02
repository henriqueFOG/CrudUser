import { NgModule } from '@angular/core';

// Importações do Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';

// ... Outras importações do Angular Material conforme necessário

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatGridListModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatGridListModule
  ]
})
export class MaterialModule { }
