import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'menu-room',
  templateUrl: './menu-room-form.template.html',
  styleUrls: [
    './menu-room-form.style.css'
  ],
})
export class CreateRoomFormComponent {
  @Input() meetingId: string = ''  

  showJoinForm: boolean = false
  form: FormGroup = new FormGroup({
    room: new FormControl(''),
  })

  createRoom() {
    this.onCreateRoom.emit()
  }

  showFormJoinRoom() {
    this.showJoinForm = true
  }  

  joinRoom() {
    this.onJoinRoom.emit(this.form.value)
  }  

  @Output() onCreateRoom = new EventEmitter()
  @Output() onJoinRoom = new EventEmitter()
}
