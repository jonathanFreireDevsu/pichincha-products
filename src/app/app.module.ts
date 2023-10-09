import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './shared/input/input.component';
import { TableComponent } from './table/table.component';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot([
    //   {path: '', component: ProductListComponent},
    //   // {path: '/agregar-producto', component: AddEditProductComponent},
    //   // {path: '/editar-producto/:id', component: AddEditProductComponent},
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
