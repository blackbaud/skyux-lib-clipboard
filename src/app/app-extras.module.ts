import {
  NgModule
} from '@angular/core';

import {
  SkyClipboardModule
} from './public/public_api';

import {
  SkyDocsToolsModule,
  SkyDocsToolsOptions
} from '@skyux/docs-tools';

@NgModule({
  exports: [
    SkyClipboardModule,
    SkyDocsToolsModule
  ],
  providers: [
    {
      provide: SkyDocsToolsOptions,
      useValue: {
        gitRepoUrl: 'https://github.com/blackbaud/skyux-sample',
        packageName: '@skyux/sample'
      }
    }
  ]
})
export class AppExtrasModule { }
