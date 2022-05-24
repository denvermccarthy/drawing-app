import React from 'react';
import { Link } from 'react-router-dom';

export default function ListItem({ item }) {
  const relativeDays =
    (new Date(item.created_at) - new Date()) / (1000 * 60 * 60 * 24);
  const relativeDate = new Intl.RelativeTimeFormat('en').format(
    Math.ceil(relativeDays),
    'days'
  );
  return (
    <Link to={`/drawings/${item.id}`}>
      <h3>{item.title}</h3>
      <p>{relativeDate}</p>
    </Link>
  );
}
