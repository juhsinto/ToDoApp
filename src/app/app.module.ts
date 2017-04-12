import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenu } from './menu/nav-menu.component';
import { MenuList } from './menu/menu-list.component';

import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { HelpComponent } from './pages/help.component';

import { TodoContainer } from './todo-components/todo-container.component';
import { TodoElement } from './todo-components/todo-element.component';

@NgModule({
  declarations: [
    AppComponent, NavMenu, MenuList,
    AboutComponent, HelpComponent, HomeComponent,
    TodoContainer, TodoElement
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
     },
     {
       path: 'home',
       component: HomeComponent
     },
     {
      path: '',                     // default path
      redirectTo: '/home',
      pathMatch: 'full'
     }

   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
