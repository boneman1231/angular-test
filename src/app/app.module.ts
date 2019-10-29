import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms"; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// ag-grid
import { AgGridModule } from "ag-grid-angular";
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ]),
FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
// HttpClientModule,
    AgGridModule.withComponents([])
  ],
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/