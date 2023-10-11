import { BrowserModule } from "@angular/platform-browser";
import { AddProductViewComponent } from "../add-product-view/add-product-view.component";
import { AppComponent } from "../app.component";
import { EditProductViewComponent } from "../edit-product-view/edit-product-view.component";
import { FormComponent } from "../form/form.component";
import { MainViewComponent } from "../main-view/main-view.component";
import { MessageComponent } from "../message/message.component";
import { ModalComponent } from "../modal/modal.component";
import { DateFormatPipe } from "../pipes/dateToString.pipe";
import { InputComponent } from "../shared/input/input.component";
import { TableComponent } from "../table/table.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { HttpClientTestingModule } from "@angular/common/http/testing";

export const mockDeclarations = {
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
    HttpClientTestingModule,
    RouterModule.forRoot([
    {path: '', component: MainViewComponent},
    {path: 'agregar-producto', component: AddProductViewComponent},
    {path: 'editar-producto', component: EditProductViewComponent},
    ])
],
// exports: [RouterModule],
providers: [],
// bootstrap: [AppComponent]
}