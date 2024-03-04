import { NgModule } from '@angular/core';

import {MatInputModule, MatLabel} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

const modules = [
  MatLabel,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
]

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
