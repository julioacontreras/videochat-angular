export const setTrack = (stream: any, audioElement: any, participant: any, isLocal: any) => {
    if (stream.kind == 'video') {
      const isWebCamOn = true;
      const mediaStream = new MediaStream();
      mediaStream.addTrack(stream.track);
      let videoElm: any = document.getElementById(`v-${participant.id}`);
      videoElm.srcObject = mediaStream;
      videoElm
        .play()
        .catch((error: unknown) =>
          console.error("videoElem.current.play() failed", error)
        );
    }
    if (stream.kind == 'audio') {
      if (isLocal) {
        const isMicOn = true;
      } else {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(stream.track);
        audioElement.srcObject = mediaStream;
        audioElement
          .play()
          .catch((error: unknown) => console.error("audioElem.play() failed", error));
      }
    }
  }
  