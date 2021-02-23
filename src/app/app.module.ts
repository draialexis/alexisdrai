import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {FooterComponent} from './components/page-structure/footer/footer.component';
import {HeaderComponent} from './components/page-structure/header/header.component';
import {NavbarComponent} from './components/page-structure/navbar/navbar.component';

import {SmokefreeComponent} from './components/smokefree/smokefree.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {FormsModule} from '@angular/forms';
import { WorkExperienceComponent } from './components/main/work-experience/work-experience.component';
import { EducationComponent } from './components/main/education/education.component';
import { SkillsComponent } from './components/main/skills/skills.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    SmokefreeComponent,
    PageNotFoundComponent,
    WorkExperienceComponent,
    EducationComponent,
    SkillsComponent,
    DisclaimerComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
