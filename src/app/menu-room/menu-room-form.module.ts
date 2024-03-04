import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateRoomFormComponent } from './menu-room-form.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports:      [ ReactiveFormsModule, MaterialModule ],
  declarations: [ CreateRoomFormComponent ],
  exports:    [ CreateRoomFormComponent ]
})
export class MenuRoomFormModule { 
}
