import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BeersComponentComponent } from './beers/beers-component/beers-component.component';
import { BeerComponentComponent } from './beers/beer-component/beer-component.component';
import { CollapseComponentComponent } from './shared/components/collapse-component/collapse-component.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StringToColourPipe } from './shared/pipes/string-to-colour.pipe';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { LoadingInterceptorService } from './shared/services/loading-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    BeersComponentComponent,
    BeerComponentComponent,
    CollapseComponentComponent,
    StringToColourPipe,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
