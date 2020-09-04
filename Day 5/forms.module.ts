import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormsPageRoutingModule } from './forms-routing.module';

import { FormsPage } from './forms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsPageRoutingModule
  ],
  declarations: [FormsPage]
})
export class FormsPageModule {}
