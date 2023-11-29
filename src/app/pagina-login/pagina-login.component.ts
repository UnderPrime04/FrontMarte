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
      login: ['', Validators.required], // Modifiquei para um campo vazio, para aceitar CPF/CNPJ/Email
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
      // Se for um e-mail inválido
      this.errorMessage = 'E-Mail inválido. Verifique o formato do e-mail.';
    } else {
      // Se não for CPF, CNPJ ou E-mail válido
      this.errorMessage = 'Por favor, insira um CPF, CNPJ ou E-Mail válido.';
    }

    return null;
  }
}

