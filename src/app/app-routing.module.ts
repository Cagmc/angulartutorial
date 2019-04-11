import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HeroesComponent } from './heroes/heroes.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { TankopediaComponent } from './tank-components/tankopedia/tankopedia.component';
import { TankDetailsComponent } from './tank-components/tank-details/tank-details.component';
import { TankGunDetailsComponent } from './tank-components/tank-gun-details/tank-gun-details.component';
import { TankModuleDetailsComponent } from './tank-components/tank-module-details/tank-module-details.component';
import { UsersComponent } from './containers/users/users.component';
import { UserComponent } from './containers/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/tankopedia', pathMatch: 'full' },
  // { path: 'heroes', component: HeroesComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'tankopedia', component: TankopediaComponent },
  { path: 'tank/:id', component: TankDetailsComponent },
  { path: 'gun/:id', component: TankGunDetailsComponent },
  { path: 'module/:type/:id', component: TankModuleDetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
