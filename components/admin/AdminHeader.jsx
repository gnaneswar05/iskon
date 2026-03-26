import React from 'react';

export default function AdminHeader() {
  return (
    <header className="admin-header">
      <div className="admin-header__title">
        <h1>Dashboard Overview</h1>
      </div>
      <div className="admin-header__user">
        <span className="admin-header__greeting">Welcome, Admin</span>
        <div className="admin-header__avatar">A</div>
      </div>
    </header>
  );
}
