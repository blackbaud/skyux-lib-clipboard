import {
  NgModule
} from '@angular/core';

import {
  SkyClipboardModule
} from './public';

import {
  AppSkyModule
} from './app-sky.module';

@NgModule({
  exports: [
    AppSkyModule,
    SkyClipboardModule
  ]
})
export class AppExtrasModule { }
