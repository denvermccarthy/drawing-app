import React from 'react';
import { Link } from 'react-router-dom';
import { useDrawings } from '../../hooks/drawings';
import { useForm } from '../../hooks/form';
import { useUser } from '../../hooks/user';

export default function CreateDrawing() {
  const { createHandler, createFormObject } = useDrawings();
  const {
    user: { id },
  } = useUser();
  const { formState, handleChange } = useForm(createFormObject());
  if (!createFormObject()) return <div>loading....</div>;

  const { title, description } = createFormObject();
  const submitHandler = async (e) => {
    e.preventDefault();
    const user_id = id;
    await createHandler({ ...formState, user_id });
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
