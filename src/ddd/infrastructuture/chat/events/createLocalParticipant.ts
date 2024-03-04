import { createVideoElement } from "./createVideoElement";

export const createLocalParticipant = (meeting: any, videoContainer: any) => {
  const localParticipant = createVideoElement(
    meeting.localParticipant.id,
    meeting.localParticipant.displayName
  );
  videoContainer.appendChild(localParticipant);    
}