import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroComponent } from './hero.component';
import { AdminComponent } from './admin-component';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    children: [
      {
        path: '',
        component: HeroesComponent,
      },
      {
        path: ':id',
        component: HeroComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
