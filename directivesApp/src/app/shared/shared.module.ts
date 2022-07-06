import { NgModule } from '@angular/core';

import { CustomIfDirective } from './directives/custom-if.directive';
import { ErrorMsgDirective } from './directives/error-msg.directive';

@NgModule({
  declarations: [ErrorMsgDirective, CustomIfDirective],
  exports: [ErrorMsgDirective, CustomIfDirective],
})
export class SharedModule {}
