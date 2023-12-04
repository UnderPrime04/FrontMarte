import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logada-artista',
  templateUrl: './logada-artista.component.html',
  styleUrls: ['./logada-artista.component.css']
})
export class LogadaArtistaComponent implements OnInit{
  contratantes: Array<any> = [];
  artistas: Array<any> = [];
  
  constructor() { }
  

  ngOnInit() {
    this.contratantes = [
      { "id": 1, "nome": "Barzin da Esquina", "procura": "Cantor", "descricao": "Procuramos cantor para cantar dia 12/12/24 das 23 as 00", "entrada": "23:00", "saida": "00:00", "pagamento": "A combinar" },
      { "id": 2, "nome": "Barzin da Esquina", "procura": "Cantor", "descricao": "Procuramos cantor para cantar dia 12/12/24 das 23 as 00", "entrada": "23:00", "saida": "00:00", "pagamento": "A combinar" },

      
];
      this.artistas = [
      {"id": 1, "nome": "João", "tipo": "Cantor", "descricao": "Canto sertanejo com minha equipe e já fiz alguns covers"},
      {"id": 1, "nome": "João", "tipo": "Cantor", "descricao": "Canto sertanejo com minha equipe e já fiz alguns covers"}

  
];
}


}