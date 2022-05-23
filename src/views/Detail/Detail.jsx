import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDrawings } from '../../hooks/drawings';

export default function Detail() {
  const { drawing, isOwnDrawing } = useDrawings();
  if (!drawing) return <div>loading...</div>;

  const { title, description } = drawing;
  return (
    <div>
      <Link to={'/drawings'}>Home</Link>Detail
      {isOwnDrawing ? (
        <Link to={`/drawings/${drawing.id}/edit`}>Edit</Link>
      ) : (
        <Link to={`/drawings/copy/${drawing.id}`}>Copy</Link>
      )}
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
