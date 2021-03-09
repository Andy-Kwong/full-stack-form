import React from 'react';
import { Link } from 'react-router-dom';

export default function RouterLink({ to, children, styles }) {
  return (
    <Link to={to} style={{ textDecoration: 'none', ...styles }}>
      {children}
    </Link>
  );
}