import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainComponent} from './components/main/main.component';
import {SmokefreeComponent} from './components/smokefree/smokefree.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: 'main', component: MainComponent},
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
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
