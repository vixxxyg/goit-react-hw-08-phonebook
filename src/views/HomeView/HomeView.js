import React from 'react';
import s from './HomeView.module.css';
import image from './i.png';

export default function HomeView() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Welcome to the PHONEBOOK{''}</h1>
      <img className={s.image} src={image} alt="phone" />
    </div>
  );
}
