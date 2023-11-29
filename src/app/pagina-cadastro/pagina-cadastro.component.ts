import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { Validacoes } from '../validacoes';
import { z } from "zod";


@Component({
  selector: 'app-pagina-cadastro',
  templateUrl: './pagina-cadastro.component.html',
  styleUrls: ['./pagina-cadastro.component.css']
})
export class PaginaCadastroComponent {
  @ViewChild('senhaInput') senhaInputRef!: ElementRef;
  @ViewChild('confirmarSenhaInput') confirmarSenhaInputRef!: ElementRef;

  cadastroForm: FormGroup;

  isSenhaVisivel: boolean = false;

  constructor(private renderer: Renderer2, private builder: FormBuilder) {
    this.cadastroForm = builder.group({
      artista: z.enum(["Cantor", "Músico", "Dançarino"]),
      nome: z.string().min(6),
      email: z.string().email(),
      cpf: z.string().length(11),
      tel: z.string().length(11),
      senha: z.string().min(8),
      chkSenha: z.string().min(8),
      contratante: z.enum(["Estabelecimento", "Casa de Show", "Outro"]),
      cnpj: z.string().length(14),
      cep: z.string().length(8)
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
    const cadastroValue = this.cadastroForm.get('cpf')?.value;
  
    if (Validacoes.isCpf(cadastroValue)) {
      return "/logada/1"; // Se for um CPF, redireciona para o caminho correspondente ao login de artista
    } else if (Validacoes.isCnpj(cadastroValue)) {
      return "/logada/2"; // Se for um CNPJ, redireciona para o caminho correspondente ao login de contratante
    } else {
      // Se não for CPF nem CNPJ, você pode retornar um valor específico para indicar isso
      // Aqui, você pode retornar um número (como 2), mas geralmente, para indicar um erro, pode-se retornar null, undefined ou uma string vazia, por exemplo.
      // O importante é que esse valor retornado indique que não é nem CPF nem CNPJ.
      // Você pode também exibir uma mensagem de erro para o usuário informando que a entrada não é válida.
      return null;
    }
  }

  /*cadastro1() {
    
    const cadastroValue = this.cadastroForm.get('cpf')?.value;
    if (Validacoes.isCpf(cadastroValue)) {
      return "/logada/1"
    }
    else{
      // falar que tá errado
      return 2;
    }
  }

  cadastro2() {
    
    const cadastroValue = this.cadastroForm.get('cnpj')?.value;
    if (Validacoes.isCnpj(cadastroValue)) {
      
      return "/logada/2"
    }
    else{
      // falar que tá errado
      return 2;
    }
  }*/

}

