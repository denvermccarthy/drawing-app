import React from 'react';
import { Link } from 'react-router-dom';

export default function ListItem({ item }) {
  return (
    <Link to={`/drawings/${item.id}`}>
      <p>
        Some Name <span>x time ago</span>
      </p>
      <h3>
        {item.title} {'>>'}
      </h3>
    </Link>
  );
}
