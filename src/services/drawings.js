import { client, parseData } from './client';

export const fetchDrawings = async () => {
  const resp = await client.from('drawings').select('*');
  return parseData(resp);
};
