import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { TankopediaComponent } from './tankopedia/tankopedia.component';
import { TankDetailsComponent } from './tank-details/tank-details.component';
import { TankGunDetailsComponent } from './tank-gun-details/tank-gun-details.component';
import { TankModuleDetailsComponent } from './tank-module-details/tank-module-details.component';

import { MasteryLevelPipe } from './mastery-level.pipe';

@NgModule({
  declarations: [
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
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    /*HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
