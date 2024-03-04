import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports:      [ ReactiveFormsModule, MaterialModule ],
  declarations: [ LoginFormComponent ],
  exports:    [ LoginFormComponent ]
})
export class LoginFormModule { 
}
