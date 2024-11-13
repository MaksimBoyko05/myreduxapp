import React from 'react';

export default function HeavyComponent() {
  let data = [];
  for (let i = 0; i < 1000000; i++) {
    data.push(i * Math.random());
  }

  return <div>Важкий компонент завантажено!</div>;
}
