import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuitacaoPage } from './quitacao';

@NgModule({
  declarations: [
    QuitacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(QuitacaoPage),
  ],
})
export class QuitacaoPageModule {}
