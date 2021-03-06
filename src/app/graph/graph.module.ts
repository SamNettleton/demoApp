import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {NgxEchartsModule} from 'ngx-echarts';

import { IonicModule } from '@ionic/angular';

import { GraphPage } from './graph.page';

const routes: Routes = [
  {
    path: '',
    component: GraphPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxEchartsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GraphPage]
})
export class GraphPageModule {}
