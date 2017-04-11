import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavMenu } from './menu/nav-menu.component';
import { MenuList } from './menu/menu-list.component';

import { AboutComponent } from './pages/about.component';
import { HelpComponent } from './pages/help.component';

import { RouterModule }   from '@angular/router';

@NgModule({
  declarations: [
    AppComponent, NavMenu, MenuList, AboutComponent, HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
     {
       path: 'about',
       component: AboutComponent
     },
     {
       path: 'help',
       component: HelpComponent
     }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
