import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDualListboxModule } from '../src';
import { DemoComponent } from './demo.component';
import { SimpleDemoComponent, CustomKeyDemoComponent } from './components';

@NgModule({
  declarations: [DemoComponent, SimpleDemoComponent, CustomKeyDemoComponent],
  imports: [BrowserModule, NgxDualListboxModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
