import { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { DrawingsContext } from '../context/DrawingsContext/DrawingsContext';
import {
  createDrawing,
  deleteDrawing,
  fetchDrawings,
  updateDrawing,
} from '../services/drawings';
import { useUser } from './user';

export const useDrawings = () => {
  const context = useContext(DrawingsContext);
  const { user } = useUser();
  const { id } = useParams();
  const history = useHistory();

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
  const isOwnDrawing = drawing?.user_id === user.id;

  const editHandler = async (drawing, formState) => {
    const { title, description } = formState;
    const payload = {
      ...drawing,
      title: title || drawing.title,
      description: description || drawing.description,
    };
    await updateDrawing(payload);
    dispatch({ type: 'EDIT', payload });
    history.push('/');
  };
  const createHandler = async (drawing) => {
    const payload = await createDrawing(drawing);
    dispatch({ type: 'CREATE', payload });
    history.push('/');
  };
  const deleteHandler = async (drawing) => {
    const payload = await deleteDrawing(drawing);
    dispatch({ type: 'DELETE', payload });
    history.push('/');
  };

  const createFormObject = () => {
    if (!drawing) return;
    let title = drawing.title ?? '';
    let description = drawing.description ?? '';
    return { title, description };
  };
  return {
    createFormObject,
    drawings,
    drawing,
    isOwnDrawing,
    editHandler,
    createHandler,
    deleteHandler,
  };
};
