import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/homes/homes.component';
import { ContentComponent } from '../pages/content/content.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Página inicial
  { path: 'content/:id', component: ContentComponent } // ✅ Essa rota precisa existir!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
