import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module'; // Se você tiver um módulo separado para importações do Angular Material
import { AlertComponent } from './components/alert/alert.component';
import { RodapeComponent } from './components/rodape/rodape.componet';

@NgModule({
  declarations: [
    AlertComponent,
    RodapeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    AlertComponent,
    RodapeComponent,
  ]
})
export class SharedModule { }
