import { useContext, useEffect } from 'react';
import { DrawingsContext } from '../context/DrawingsContext/DrawingsContext';
import { fetchDrawings } from '../services/drawings';

export const useDrawings = () => {
  const context = useContext(DrawingsContext);

  if (context === undefined) {
    throw new Error(`Drawings Context must be used in a DrawingsProvider`);
  }

  const { dispatch, state: drawings } = context;
  useEffect(() => {
    const fetchDrawingsOnLoad = async () => {
      const data = await fetchDrawings();
      dispatch({ type: 'FETCH', payload: data });
    };
    fetchDrawingsOnLoad();
  }, []);

  const findDrawing = (id) => {
    console.log('d', drawings);
    return drawings.find((draw) => draw.id === Number(id));
  };
  return { drawings, findDrawing };
};
