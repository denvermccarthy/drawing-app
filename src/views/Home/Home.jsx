import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListItem from '../../components/Home/ListItem';
import { useDrawings } from '../../hooks/drawings';
import { fetchDrawings } from '../../services/drawings';
const sampleData = [
  { id: 1, title: 'House' },
  { id: 2, title: 'Bridge' },
  { id: 3, title: 'Tree' },
];

export default function Home() {
  const { drawings } = useDrawings();
  return (
    <>
      <h1>Drawings</h1>
      <Link to={'/drawings/create'}>add a drawing</Link>
      {drawings.map((item) => (
        <ListItem key={item.id} {...{ item }} />
      ))}
    </>
  );
}
