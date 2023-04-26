import { Oval } from 'react-loader-spinner';

import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={4}
        strokeWidthSecondary={4}
        color="#471ca9"
        secondaryColor="#fff"
      />
    </div>
  );
}
