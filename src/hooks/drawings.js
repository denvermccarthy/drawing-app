import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DrawingsContext } from '../context/DrawingsContext/DrawingsContext';
import { fetchDrawings } from '../services/drawings';

export const useDrawings = () => {
  const context = useContext(DrawingsContext);
  const { id } = useParams();

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

  const findDrawing = () => {
    return drawings.find((draw) => draw.id === Number(id));
  };
  const drawing = findDrawing();
  return { drawings, drawing };
};
