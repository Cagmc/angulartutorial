import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HeroesComponent } from './heroes/heroes.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { TankopediaComponent } from './tankopedia/tankopedia.component';
import { TankDetailsComponent } from './tank-details/tank-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/tankopedia', pathMatch: 'full' },
  // { path: 'heroes', component: HeroesComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'tankopedia', component: TankopediaComponent },
  { path: 'tank/:id', component: TankDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
