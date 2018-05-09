import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { MyprofileComponent } from './myprofile/myprofile.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    NavComponent,
    BodyComponent,
    FooterComponent,
    AboutComponent,
    MyprofileComponent,

  ],
  imports: [
    BrowserModule,
          RouterModule.forRoot([
            {
            path: 'about',
            component: AboutComponent},
            {
              path: 'myprofile',
              component: MyprofileComponent},
            { path: '',
              component:BodyComponent}
          ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
