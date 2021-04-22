import { NgModule } from '@angular/core';
import { Teste456Service } from 'services/teste456.service.ts';
import { Teste456Component } from './teste456.component.ts';

@NgModule({
  providers:    [
    Teste456Service
  ],
  declarations: [
    Teste456Component
  ],
})
export class Teste456Module { }