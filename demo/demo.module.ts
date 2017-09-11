import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDualListboxModule } from '../src';
import { DemoComponent } from './demo.component';
import {
  SimpleDemoComponent,
  CustomKeyDemoComponent,
  CustomTemplateComponent
} from './components';

@NgModule({
  declarations: [
    DemoComponent,
    SimpleDemoComponent,
    CustomKeyDemoComponent,
    CustomTemplateComponent
  ],
  imports: [BrowserModule, NgxDualListboxModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
