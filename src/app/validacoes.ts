
import { AbstractControl } from '../../node_modules/@angular/forms';
import { z } from "zod";

export class Validacoes {


  static cnpjSchema = z.string().refine((value) => /\d{14}/.test(value), {
    message: "CNPJ inválido",
  });

  static cpfSchema = z.string().refine((value) => /\d{11}/.test(value), {
    message: "CPF inválido",
  });

  static EmailSchema = z.string().refine((value) => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value), {
    message: "E-Mail inválido",
  });

  static isEmail(controle: AbstractControl) {
    try {
      this.EmailSchema.parse(controle.value);
      return true;
    } catch (error) {
      return false;
    }
  }
  // Função para validar e tratar erros
  static isCpf(controle: AbstractControl) {
    try {
      this.cpfSchema.parse(controle.value);
      return true;
    } catch (error) {
      console.error("CPF não é válido");
      return false; // Adicionando o retorno false para indicar que o CNPJ não é válido
    }

  }

  static isCnpj(controle: AbstractControl) {
    try {
      this.cnpjSchema.parse(controle.value);
      return true;
    } catch (error) {
      console.error("CNPJ não é válido");
      return false; // Adicionando o retorno false para indicar que o CNPJ não é válido
    }
  }
}
