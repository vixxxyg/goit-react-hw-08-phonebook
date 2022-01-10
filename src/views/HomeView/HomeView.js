import React from 'react';
import s from './HomeView.module.css';
import image from './tel.jpg';

export default function HomeView() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Добро пожаловать на сервис!{''}</h1>
      <img src={image} width="500" alt="sadcat" style={{ display: 'block' }} />
    </div>
  );
}
