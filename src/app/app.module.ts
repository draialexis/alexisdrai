import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {FooterComponent} from './components/page-structure/footer/footer.component';
import {HeaderComponent} from './components/page-structure/header/header.component';
import {NavbarComponent} from './components/page-structure/navbar/navbar.component';

import {MainComponent} from './components/main/main.component';
import {SmokefreeComponent} from './components/smokefree/smokefree.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    MainComponent,
    SmokefreeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
