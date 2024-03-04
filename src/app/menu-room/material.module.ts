import { NgModule } from '@angular/core'

import {MatInputModule, MatLabel} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button'
import { CommonModule } from '@angular/common'

const modules = [
  CommonModule,
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
