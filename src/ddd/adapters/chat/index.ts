export type ResultInitMeet = {
  leave: () => void
  toggleMic: () => void
  toggleWebcam: () => void
}

export type Chat = {
  createMeeting: () => Promise<string>
  initializeMeeting: (meetingId: string, username: string, videoContainer: any, callbacks: any) => ResultInitMeet
} 

export let chat: Chat | null = null

export const setChat = (instance: Chat) => {
  chat = instance
}

