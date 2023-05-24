import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasasPageComponent } from './pages/casas-page/casas-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PerfilPageComponent } from './pages/perfil-page/perfil-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';



@NgModule({
  declarations: [
    CasasPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    PerfilPageComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CasasModule { }
