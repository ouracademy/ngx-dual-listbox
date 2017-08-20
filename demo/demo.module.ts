import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDualListboxModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, NgxDualListboxModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
