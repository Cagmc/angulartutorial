import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HeroesComponent } from './heroes/heroes.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { TankopediaComponent } from './tankopedia/tankopedia.component';

const routes: Routes = [
  { path: '', redirectTo: '/tankopedia', pathMatch: 'full' },
  // { path: 'heroes', component: HeroesComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'tankopedia', component: TankopediaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
