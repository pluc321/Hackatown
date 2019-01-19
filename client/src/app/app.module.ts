import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BasicService } from "./basic.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule, ROUTING_COMPONENTS } from './app-routing.module';
import { SocketService } from "./socket.service";


@NgModule({
  declarations: [
    AppComponent,
    ROUTING_COMPONENTS,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BasicService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }