import { setChat, Chat } from '../../adapters/chat'

import { createMeeting } from "./events/createMeeting"
import { initializeMeeting } from "./events/initializeMeeting"

export const videoChat: Chat = {
    createMeeting,
    initializeMeeting
}

setChat(videoChat)
