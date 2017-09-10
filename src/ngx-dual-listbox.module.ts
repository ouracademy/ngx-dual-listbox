import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDualListboxComponent } from './components/index/index.component';

@NgModule({
  declarations: [NgxDualListboxComponent],
  imports: [CommonModule],
  exports: [NgxDualListboxComponent]
})
export class NgxDualListboxModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxDualListboxModule
    };
  }
}
