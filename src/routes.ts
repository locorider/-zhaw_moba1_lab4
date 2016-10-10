/// <reference path="../typings/index.d.ts"/>

import {Component, ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./app/main";

@Component({
  selector: 'rootApp',
  template: require('./root.html')
})
export class AppComponent {

}

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
