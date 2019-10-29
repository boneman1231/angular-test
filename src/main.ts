import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

//  test 
declare var obelisk:any; 

var canvas = document.getElementById('canvas-demo');
// create pixel view container in point
var point = new obelisk.Point(270, 120);
var pixelView = new obelisk.PixelView(canvas, point);
// create dimension instance
var dimension = new obelisk.CubeDimension(120, 200, 60);
// create color instance
var color = new obelisk.CubeColor().getByHorizontalColor(obelisk.ColorPattern.GRAY);
// create cube primitive
var cube = new obelisk.Cube(dimension, color);
// render primitive to view
pixelView.renderObject(cube);


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/