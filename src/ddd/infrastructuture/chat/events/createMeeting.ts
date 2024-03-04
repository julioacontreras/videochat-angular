import { TOKEN, URL_API } from '../types/consts'

export const createMeeting = async () => {
  const url = URL_API
  const options = {
    method: 'POST',
    headers: { Authorization: TOKEN, 'Content-Type': 'application/json' },
  }
  const { roomId } = await fetch(url, options)
    .then((response) => response.json())
  return roomId
}

