import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestoViewComponent } from './resto-view/resto-view.component';
import { PrincipalViewComponent } from './principal-view/principal-view/principal-view.component';
import { ClientViewComponent } from './client-view/client-view.component';





const routes: Routes = [
  // { path: '', redirectTo:'/<defaultpage>', pathMatch: 'full' },
  // { path: '<some-page>', component: <PageComponent> }
  // { path: '**', component: <PageNotFoundComponent> }
    { path: 'restoView', component: RestoViewComponent },
    { path: 'principalView', component: PrincipalViewComponent },
    { path: 'clientView', component: ClientViewComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Keep all routing components in this array so only one declaration is needed in the app-module (instead of adding every component individually)
export const ROUTING_COMPONENTS = [
 RestoViewComponent,
 PrincipalViewComponent,
 ClientViewComponent
];