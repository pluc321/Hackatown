import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BasicService } from "./basic.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule, ROUTING_COMPONENTS } from './app-routing.module';
import { MaterialModule } from '../material.module';
import { ClientViewComponent } from './client-view/client-view.component';
import { RestoViewComponent } from './resto-view/resto-view.component';
import { PrincipalViewComponent } from './principal-view/principal-view/principal-view.component';
import { LoginFormComponent } from './principal-view/login-form/login-form.component';
import { FormsModule }   from '@angular/forms';
import { ClickComponent } from './principal-view/click/click.component';

@NgModule({
  declarations: [
    AppComponent,
    ROUTING_COMPONENTS,
    ClientViewComponent,
    RestoViewComponent,
    PrincipalViewComponent,
    LoginFormComponent,
    ClickComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [BasicService],
  bootstrap: [AppComponent]
})
export class AppModule { }