import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/user.service';
// Importe outros serviços, guardas e elementos centrais aqui

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    UserService,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}
