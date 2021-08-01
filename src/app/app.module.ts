import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComunicacionPadreModule } from './pages/comunicacion-padre/comunicacion-padre.module';
import { TypicodeModule } from './pages/typicode/typicode.module';
import { TypicodeInterceptor } from './services/typicode.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComunicacionPadreModule,
    TypicodeModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TypicodeInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
