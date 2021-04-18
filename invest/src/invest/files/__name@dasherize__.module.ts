import { NgModule } from '@angular/core';
import { <%= classify(name) %>Service } from 'services/<%= dasherize(name) %>.service.ts';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component.ts';

@NgModule({
  providers:    [
    <%= classify(name) %>Service
  ],
  declarations: [
    <%= classify(name) %>Component
  ],
})
export class <%= classify(name) %>Module { }