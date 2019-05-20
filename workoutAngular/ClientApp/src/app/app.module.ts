import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DeleteComponent } from './CategoryComponent/delete/delete.component';
import { createComponent } from '@angular/compiler/src/core';
import { EditComponent } from './CategoryComponent/edit/edit.component';
import { CreateComponent } from './CategoryComponent/create/create.component';
import { ListComponent } from './CategoryComponent/list/list.component'
import { WorkoutService } from './CategoryComponent/workout.service';





@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CreateComponent,
    ListComponent,
    EditComponent,
    DeleteComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'create', component: CreateComponent },
      { path: 'Edit', component: EditComponent },
      { path: 'list', component: ListComponent },
      { path: 'Delete', component: DeleteComponent },
    ])
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
