import { Component } from '@angular/core';

@Component({
  selector: 'ngx-demo-app',
  template: `
    <div class="container">
      <ngx-simple-demo></ngx-simple-demo>
      <ngx-custom-key></ngx-custom-key>
    </div>
  `
})
export class DemoComponent {}
