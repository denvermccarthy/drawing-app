import React from 'react';

export default function EditDetail() {
  const { drawing } = useDrawings();
  console.log('drawing', drawing);
  if (!drawing) return <div>loading...</div>;

  const { title, description } = drawing;
  return (
    <div>
      <Link to={'/drawings'}>Home</Link>Detail
      <label htmlFor="title">
        <input type="text" id="title" name="title" defaultValue={title} />
      </label>
      <label htmlFor="description">
        <input
          type="text"
          id="description"
          name="description"
          defaultValue={description}
        />
      </label>
    </div>
  );
}
