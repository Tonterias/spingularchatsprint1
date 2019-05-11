import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateMomentAdapter } from './util/datepicker-adapter';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  Spingularchatsprint1SharedLibsModule,
  Spingularchatsprint1SharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective,
  ChatService
} from './';

@NgModule({
  imports: [Spingularchatsprint1SharedLibsModule, Spingularchatsprint1SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }, ChatService],
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
