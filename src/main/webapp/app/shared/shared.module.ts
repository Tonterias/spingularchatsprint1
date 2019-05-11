import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  Spingularchatsprint1SharedLibsModule,
  Spingularchatsprint1SharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [Spingularchatsprint1SharedLibsModule, Spingularchatsprint1SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [Spingularchatsprint1SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Spingularchatsprint1SharedModule {
  static forRoot() {
    return {
      ngModule: Spingularchatsprint1SharedModule
    };
  }
}
