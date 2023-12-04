import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validacoes } from '../validacoes';
import { Router } from '@angular/router';
import { isCPF, isCNPJ } from 'brazilian-values';
import { z } from 'zod';
import  v8n  from 'v8n';


@Component({
  selector: 'app-pagina-cadastro',
  templateUrl: './pagina-cadastro.component.html',
  styleUrls: ['./pagina-cadastro.component.css']
})
export class PaginaCadastroComponent {
  @ViewChild('senhaInput') senhaInputRef!: ElementRef;
  @ViewChild('confirmarSenhaInput') confirmarSenhaInputRef!: ElementRef;

  cadastroForm: FormGroup;
  errorMessage: string | null = null;

  isSenhaVisivel: boolean = false;

  constructor(private router: Router, private builder: FormBuilder) {
    this.cadastroForm = builder.group({
      artista: z.enum(["Cantor", "Músico", "Dançarino"]),
      nome: z.string().min(6),
      email: z.string().email().min(3),
      cpf: z.string().length(11),
      tel: z.string().length(11),
      senha: z.string().min(8),
      chkSenha: z.string().min(8),
      contratante: z.enum(["Estabelecimento", "Casa de Show", "Outro"]),
      cnpj: z.string().length(14),
      cep: z.string().length(8)
    });
    this.clearFormFields();
  }

  clearFormFields() {
    this.cadastroForm.patchValue({
      artista: null,
      nome: null,
      email: null,
      cpf: null,
      tel: null,
      senha: null,
      chkSenha: null,
      contratante: null,
      cnpj: null,
      cep: null
    });
  }

  mostrarComponentes(value: string) {
    const componentesPessoaFisica = document.getElementById('componentes-pessoas-fisica');
    const componentesPessoaJuridica = document.getElementById('componentes-pessoas-juridica');

    if (componentesPessoaFisica && componentesPessoaJuridica) {
      if (value === 'pessoa-fisica') {
        componentesPessoaFisica.style.display = 'block';
        componentesPessoaJuridica.style.display = 'none';
      } else if (value === 'pessoa-juridica') {
        componentesPessoaFisica.style.display = 'none';
        componentesPessoaJuridica.style.display = 'block';
      }
    }
  }


  mostrarSenha() {
    this.isSenhaVisivel = !this.isSenhaVisivel;
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmarSenha');
  
    if (senhaInput && confirmarSenhaInput) {
      senhaInput.setAttribute('type', this.isSenhaVisivel ? 'text' : 'password');
      confirmarSenhaInput.setAttribute('type', this.isSenhaVisivel ? 'text' : 'password');
    }
  }

  cadastrar() {
    const cadastroValue = this.cadastroForm.value;

    if (isCPF(cadastroValue.cpf)) {
      this.errorMessage = null; // Limpar a mensagem de erro, se houver

      // Redirecionar para a página correspondente
      window.location.href = '/logada/1';
    }  else if (Validacoes.isEmail(cadastroValue.email)) {
      this.errorMessage = null; // Limpar a mensagem de erro, se houver

      // Redirecionar para a página correspondente
      // (você pode adicionar uma lógica de redirecionamento específica para e-mails válidos, se necessário)
      window.location.href = '/logada/2'
    } else {
      this.errorMessage = 'Por favor, insira um CPF, CNPJ ou e-mail válido.';
    }
  }
}
