import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './tourofheroes-components/heroes/heroes.component';
import { HeroDetailComponent } from './tourofheroes-components/hero-detail/hero-detail.component';
import { DashboardComponent } from './tourofheroes-components/dashboard/dashboard.component';
import { HeroSearchComponent } from './tourofheroes-components/hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { TankopediaComponent } from './tank-components/tankopedia/tankopedia.component';
import { TankDetailsComponent } from './tank-components/tank-details/tank-details.component';
import { TankGunDetailsComponent } from './tank-components/tank-gun-details/tank-gun-details.component';
import { TankModuleDetailsComponent } from './tank-components/tank-module-details/tank-module-details.component';

import { MasteryLevelPipe } from './pipes/mastery-level.pipe';
import { UserService } from './services/user.service';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { UsersComponent as UsersContainerComponent } from './containers/users/users.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './containers/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [
    UsersContainerComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    TankopediaComponent,
    TankDetailsComponent,
    MasteryLevelPipe,
    TankGunDetailsComponent,
    TankModuleDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' })
    /*HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )*/
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
