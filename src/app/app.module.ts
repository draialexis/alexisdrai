import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FooterComponent} from './components/page-structure/footer/footer.component';
import {HeaderComponent} from './components/page-structure/header/header.component';
import {MainComponent} from './components/main/main.component';
import {SmokefreeComponent} from './components/smokefree/smokefree.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    SmokefreeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
