import { Component } from '@angular/core';
import { CadastrarCliente } from '../models/cadastrarCliente';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'telaInial-page',
  templateUrl: './telaInicial.component.html'
})
export class TelaInicialPage {
  constructor(private cadastroService: CadastroService) {
    this.cadastroService = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  doCadastro(event) {
    console.log(this.loginForm.value);
    event.preventDefault();
  }
}