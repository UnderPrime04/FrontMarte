import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-logada-contratante',
  templateUrl: './logada-contratante.component.html',
  styleUrls: ['./logada-contratante.component.css']
})
export class LogadaContratanteComponent implements OnInit{
  artistas: Array<any> = [];
  
  constructor() { }

  ngOnInit(){
    this.artistas = [
      {"id": 1, "nome": "João", "tipo": "Cantor", "descricao": "Canto sertanejo com minha equipe e já fiz alguns covers"},
      {"id": 1, "nome": "João", "tipo": "Cantor", "descricao": "Canto sertanejo com minha equipe e já fiz alguns covers"}
    ]
  }


	}

