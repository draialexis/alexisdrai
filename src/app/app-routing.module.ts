import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SmokefreeComponent} from './components/smokefree/smokefree.component';
import {EducationComponent} from './components/main/education/education.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {SkillsComponent} from './components/main/skills/skills.component';
import {WorkExperienceComponent} from './components/main/work-experience/work-experience.component';

const appRoutes: Routes = [
  {path: 'education', component: EducationComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'work-experience', component: WorkExperienceComponent},
  {path: 'smokefree', component: SmokefreeComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
