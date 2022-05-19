import React from 'react';
import ListItem from '../../components/Home/ListItem';
const sampleData = [
  { id: 1, title: 'House' },
  { id: 2, title: 'Bridge' },
  { id: 3, title: 'Tree' },
];

export default function Home() {
  return (
    <>
      <h1>Drawings</h1>
      <div>add drawing+</div>
      {sampleData.map((item) => (
        <ListItem key={item.id} {...{ item }} />
      ))}
    </>
  );
}
