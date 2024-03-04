import { ResultInitMeet } from '../../../adapters/chat'
import { TOKEN } from '../types/consts'
import { createLocalParticipant } from './createLocalParticipant'
import { setTrack } from './setTrack'
import { createVideoElement } from './createVideoElement'
import { createAudioElement } from './createAudioElement'

interface WindowVideoSDK {
    VideoSDK: any
}

export const initializeMeeting = (meetingId: string, username: string, videoContainer: any, callbacks: any): ResultInitMeet => {
  const windowVideoSDK = window as unknown as WindowVideoSDK
  windowVideoSDK.VideoSDK.config(TOKEN)

  const meeting = windowVideoSDK.VideoSDK.initMeeting({
    meetingId, // required
    name: username, // required
    micEnabled: true, // optional, default: true
    webcamEnabled: true, // optional, default: true
  })

  meeting.join()

  createLocalParticipant(meeting, videoContainer)

  meeting.localParticipant.on("stream-enabled", (stream: any) => {
    setTrack(stream, null, meeting.localParticipant, true)
  })
  
  meeting.on("meeting-joined", () => {
    callbacks.meetingJoined()
  })
  
  meeting.on("meeting-left", () => {
    videoContainer.innerHTML = "";
    callbacks.meetingLeft()
  })
  
  meeting.on("participant-joined", (participant: any) => {
    let videoElement = createVideoElement(
      participant.id,
      participant.displayName
    );
    let audioElement = createAudioElement(participant.id)
    participant.on("stream-enabled", (stream: any) => {
      setTrack(stream, audioElement, participant, false)
    });
    videoContainer.appendChild(videoElement)
    videoContainer.appendChild(audioElement)
  });
  
  // participants left
  meeting.on("participant-left", (participant: any) => {
    let vElement = document.getElementById(`f-${participant.id}`)
    if (!vElement) {
      return
    }
    vElement.remove()

    let aElement = document.getElementById(`a-${participant.id}`)
    if (!aElement) {
      return
    }
    aElement.remove()
  })

  const leave = () => {
    meeting?.leave()
  }

  let isMicOn = true
  const toggleMic = () => {
    if (isMicOn) {
      // Disable Mic in Meeting
      meeting?.muteMic();
    } else {
      // Enable Mic in Meeting
      meeting?.unmuteMic();
    }
    isMicOn = !isMicOn;    
  }

  let isWebCamOn = true
  const toggleWebcam = () => {
    if (isWebCamOn) {
      // Disable Webcam in Meeting
      meeting?.disableWebcam();
  
      let vElement: any = document.getElementById(`f-${meeting.localParticipant.id}`);
      vElement.style.display = "none";
    } else {
      // Enable Webcam in Meeting
      meeting?.enableWebcam();
  
      let vElement: any = document.getElementById(`f-${meeting.localParticipant.id}`);
      vElement.style.display = "inline";
    }
    isWebCamOn = !isWebCamOn;
  }

  return {
    leave,
    toggleMic,
    toggleWebcam
  }
}
