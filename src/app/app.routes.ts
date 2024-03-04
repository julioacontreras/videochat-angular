import { Routes } from '@angular/router'

import { PageLoginComponent } from './pages/page-login/page-login.component'
import { PageRoomComponent } from './pages/page-room/page-room.component'

export const routes: Routes = [
    { path: 'login', component: PageLoginComponent },
    { path: 'room/:username', component: PageRoomComponent },    
]
