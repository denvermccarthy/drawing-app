import { client, parseData } from './client';

export const fetchDrawings = async () => {
  console.log('hit', client);
  const resp = await client.from('drawings').select('*');
  console.log('resp', resp);
  return parseData(resp);
};
