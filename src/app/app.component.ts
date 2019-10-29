// import { Component } from '@angular/core';
import { Component, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
    template: `
    <div class="test-container">
      <div class="test-header">
        Clicking outside the grid will stop the editing <button style="font-size: 12px">Dummy Save</button>
        <input placeholder="click here, editing stops" />
      </div>
      <ag-grid-angular
        #agGrid
        style="width: 100%; height: 100%;"
        id="myGrid"
        class="ag-theme-balham"
        [columnDefs]="columnDefs"
        [defaultColDef]="defaultColDef"
        [components]="components"
        [rowData]="rowData"
        [stopEditingWhenGridLosesFocus]="true"
        (gridReady)="onGridReady($event)"
      ></ag-grid-angular>
    </div>
  `
})
// export class AppComponent  {}

export class AppComponent {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private components;
  private rowData: [];

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: "BondSite",
        field: "bondsite"
      },
      {
        headerName: "X",
        field: "x"
      },
      {
        headerName: "Y",
        field: "y"
      },
      {
        headerName: "Z",
        field: "z",
      },
      {
        headerName: "ProcessType",
        field: "processtype"
      },
      {
        headerName: "Layer",
        field: "layer"
      },
      {
        headerName: "Remark",
        field: "remark"
      }
    ];
    this.defaultColDef = {
      editable: true,
      width: 100,
      filter: true
    };    
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
      )
      .subscribe(data => {
        this.rowData = data;
      });
  }
}
