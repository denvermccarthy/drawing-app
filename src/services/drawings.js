import { client, parseData } from './client';

const fetchDrawings = async () => {
  const resp = await client.from('drawings').select();
  return parseData(resp);
};
