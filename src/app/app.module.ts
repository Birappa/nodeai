import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumpyComponent } from './numpy/numpy.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PythonLibsComponent } from './python-libs/python-libs.component';
import { PandasComponent } from './pandas/pandas.component';

@NgModule({
  declarations: [
    AppComponent,
    NumpyComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PythonLibsComponent,
    PandasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
