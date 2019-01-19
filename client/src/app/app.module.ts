import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BasicService } from "./basic.service";
import { HttpClientModule } from "@angular/common/http";
import { ClientViewComponent } from './client-view/client-view.component';
import { RestoViewComponent } from './resto-view/resto-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientViewComponent,
    RestoViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BasicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
