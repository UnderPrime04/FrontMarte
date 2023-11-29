import { NgModule } from '@angular/core';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { RouterModule, Routes } from '@angular/router';
import { PaginaCadastroComponent } from './pagina-cadastro/pagina-cadastro.component';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { TelaArtistaComponent } from './tela-artista/tela-artista.component';
import { TelaPerfilContratanteComponent } from './tela-perfil-contratante/tela-perfil-contratante.component';
import { LogadaArtistaComponent } from './logada-artista/logada-artista.component';
import { LogadaContratanteComponent } from './logada-contratante/logada-contratante.component';


const routes: Routes = [
  { path: '', component:PaginaInicialComponent },
  { path: 'cadastro', component:PaginaCadastroComponent },
  { path: 'login', component:PaginaLoginComponent },
  { path: 'perfil/:id', component:TelaArtistaComponent },
  { path: 'perfil/:id', component:TelaPerfilContratanteComponent },
  { path: 'logada/1', component:LogadaArtistaComponent },
  { path: 'logada/2', component:LogadaContratanteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
