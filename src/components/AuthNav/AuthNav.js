import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={s.container}>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        LogIn
      </NavLink>
    </div>
  );
}
