import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { NgxDualListboxComponent } from '../src/components/index/index.component';
import { NgxDualListboxModule } from '../src';

describe('ngx-hello-world component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxDualListboxModule.forRoot()]
    });
  });
});
