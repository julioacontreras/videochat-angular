export const createVideoElement = (pId: string, name: string) => {
  const videoFrame = document.createElement("div")
  videoFrame.setAttribute("id", `f-${pId}`)

  //create video
  const videoElement = document.createElement("video")
  videoElement.classList.add("video-frame")
  videoElement.setAttribute("id", `v-${pId}`)
  videoElement.setAttribute("playsinline", 'true')
  videoElement.setAttribute("width", "300")
  videoFrame.appendChild(videoElement)

  let displayName = document.createElement('div')
  displayName.innerHTML = `Name : ${name}`

  videoFrame.appendChild(displayName)
  return videoFrame
}