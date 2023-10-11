import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InputComponent } from './shared/input/input.component';
import { TableComponent } from './table/table.component';
import { MainViewComponent } from './main-view/main-view.component';
import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DateFormatPipe } from './pipes/dateToString.pipe';
import { ModalComponent } from './modal/modal.component';
import { AddProductViewComponent } from './add-product-view/add-product-view.component';
import { EditProductViewComponent } from './edit-product-view/edit-product-view.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TableComponent,
    MainViewComponent,
    FormComponent,
    DateFormatPipe,
    ModalComponent,
    AddProductViewComponent,
    EditProductViewComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: MainViewComponent},
      {path: 'agregar-producto', component: AddProductViewComponent},
      {path: 'editar-producto', component: EditProductViewComponent},
    ])
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
