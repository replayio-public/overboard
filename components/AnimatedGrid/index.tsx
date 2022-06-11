import React from 'react';

import s from './AnimatedGrid.module.css';

const AnimatedGrid = () => {
  return (
    <div className={s["container"]}>
        <div className={s['glow']} />
      <div className={s["grid"]}>
        <div className={s["grid-fade"]}></div>
        <div className={s["grid-lines"]}></div>
      </div>
    </div>
  );
};

export default AnimatedGrid;