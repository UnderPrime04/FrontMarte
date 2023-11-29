import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { Validacoes } from '../validacoes';
import { z } from "zod";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css']
})



export class PaginaLoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private builder: FormBuilder) {
    this.loginForm = builder.group({
      login: z.string().default('123'),
      senha: ['', Validators.required]
    });
  }


  
  login() {
    const loginValue = this.loginForm.get('login')?.value;

    if (Validacoes.isCpf(loginValue)) {
      return "/logada/1";
    } else if (Validacoes.isCnpj(loginValue)) {
      return "/logada/2";
    } else if (Validacoes.isEmail(loginValue)) {
      // Verificar se é e-mail válido e fazer a lógica necessária
      // Para este exemplo, apenas atualizando a mensagem de erro
      this.errorMessage = 'E-mail válido. Verifique CPF ou CNPJ.';
    } else {
      this.errorMessage = 'Por favor, insira um e-mail, CPF ou CNPJ válido.';
    }

    return null; // Você pode ajustar o retorno conforme a lógica desejada
  }
}

