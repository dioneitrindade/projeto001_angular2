import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Cadastre {{name}}</h1>`,
})
export class AppComponent  { 
  name = 'seus dados'; 
}
