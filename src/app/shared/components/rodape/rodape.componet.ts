import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';
import { GerenciamentoEstadoState } from 'src/app/core/state/gerenciamento-estado.state';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})

export class RodapeComponent implements OnInit {

  public emailForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private state: GerenciamentoEstadoState
    ) {
    this.emailForm = this.fb.group({
      subject_matter: ['', Validators.required],
      comment: ['', Validators.required],
      name: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {

  }

  sendEmail(){
    this.state.setTrueLoading();
    this.apiService.post(this.emailForm.value).subscribe(
      dados => {
        console.log(dados);
      },
      erro => {
        this.state.setFalseLoading();
      }
    )
  }

}
