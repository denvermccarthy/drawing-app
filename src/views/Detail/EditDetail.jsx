import React from 'react';
import { Link } from 'react-router-dom';
import { useDrawings } from '../../hooks/drawings';
import { useForm } from '../../hooks/form';

export default function EditDetail() {
  const { drawing, editHandler } = useDrawings();
  const { formState, handleChange } = useForm({ title: '', description: '' });
  if (!drawing) return <div>loading...</div>;

  const { title, description } = drawing;

  const submitHandler = async (e) => {
    e.preventDefault();
    await editHandler(drawing, formState);
  };
  return (
    <div>
      <Link to={'/drawings'}>Home</Link>Detail
      <form onChange={handleChange}>
        <label htmlFor="title">
          Title:
          <input type="text" id="title" name="title" defaultValue={title} />
        </label>
        <label htmlFor="description">
          Description:
          <input
            type="text"
            id="description"
            name="description"
            defaultValue={description}
          />
        </label>
        <button type="submit" onClick={submitHandler}>
          SAVE
        </button>
      </form>
    </div>
  );
}
