import io from 'socket.io-client';

export const connectToWS = (raceId) => {
  const socket = io(`localhost:3001/${raceId}`);
  return socket;
}

