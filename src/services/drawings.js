import { client, parseData } from './client';

export const fetchDrawings = async () => {
  const resp = await client.from('drawings').select('*');
  return parseData(resp);
};
export const createDrawing = async (drawing) => {
  const resp = await client.from('drawings').insert(drawing).single();
  return parseData(resp);
};

export const updateDrawing = async (drawing) => {
  const resp = await client
    .from('drawings')
    .update(drawing)
    .match({ id: drawing.id });
  return parseData(resp);
};
