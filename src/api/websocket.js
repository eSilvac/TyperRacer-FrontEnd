import io from 'socket.io-client';

export const connectToWS = (raceId) => {
  const socket = io(`https://tapyracer.herokuapp.com/${raceId}`);
  return socket;
}

