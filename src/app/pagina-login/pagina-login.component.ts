import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { Validacoes } from '../validacoes';
import { z } from "zod";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { isCPF, isCNPJ } from 'brazilian-values';

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
      login: ['', Validators.required], // Modifiquei para um campo vazio, para aceitar CPF/CNPJ/Email
      senha: ['', Validators.required]
    });
  }

  login() {
    const loginValue = this.loginForm.get('login')?.value;

    console.log(loginValue);
    if (isCPF(loginValue)) {
      console.log("OIIII");
      return "../logada/1";
    } 
    
    if (isCNPJ(loginValue)) {
      console.log("XXXXX");
      return "../logada/2";
    }
    
    if (Validacoes.isEmail(loginValue)) {
      // Verificar se é e-mail válido e fazer a lógica necessária
      // Para este exemplo, apenas atualizando a mensagem de erro
      this.errorMessage = 'E-mail válido. Verifique CPF ou CNPJ.';
    } else {
      this.errorMessage = 'Por favor, insira um e-mail, CPF ou CNPJ válido.';
    }

    return null; // Você pode ajustar o retorno conforme a lógica desejada
}
}
