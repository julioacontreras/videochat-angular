import { Component, OnInit } from '@angular/core'
import { MenuRoomFormModule } from '../../menu-room/menu-room-form.module'
import { chat } from '../../../ddd/adapters/chat'
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  standalone: true,
  selector: 'page-stream',
  imports: [ MenuRoomFormModule ],
  templateUrl: './page-room.template.html',
  styleUrl: './page-room.style.css'
  
})
export class PageRoomComponent implements OnInit {
  username: string = ''
  meetingId: string = ''

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.username = params.get('username') || ''
    })
  }

  onJoinRoom(settings: { room: string }) {
    const result = chat?.initializeMeeting(
      settings.room,
      this.username,
      document.getElementById('areaStream'),
      {
        meetingJoined(data: unknown) {
          console.log('meetingJoined', data)
        },
        meetingLeft(data: unknown) {
          console.log('meetingLeft', data)
        }
      })
  }

  async onCreateRoom() {
    this.meetingId = await chat?.createMeeting() || ''
    const result = chat?.initializeMeeting(
      this.meetingId,
      this.username,
      document.getElementById('areaStream'),
      {
        meetingJoined(data: unknown) {
          console.log('meetingJoined', data)
        },
        meetingLeft(data: unknown) {
          console.log('meetingLeft', data)
        }
      })
    console.log({result})
  }
}
