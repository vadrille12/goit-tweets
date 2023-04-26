import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
import { TbArrowUpSquare } from 'react-icons/tb';

import css from './ToTopBtn.module.css';

export const ToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = throttle(() => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, 300);

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={isVisible ? css.visible : css.toTop}
      onClick={handleClick}
    >
      <TbArrowUpSquare className={css.icon} />
    </div>
  );
};
