import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { CgOptions } from 'react-icons/cg';
import { filterContacts } from '../../redux/filter/slice';

import styles from './Dropdown.module.css';

export const Dropdown = () => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    const handler = e => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const dispatch = useDispatch();

  const handleDispatch = filter => {
    dispatch(filterContacts(filter));
    setOpen(false);
  };

  return (
    <div ref={menuRef} className={styles.dropdown}>
      <button
        className={styles.trigger}
        onClick={() => {
          setOpen(open => !open);
        }}
      >
        Filter
        <CgOptions />
      </button>

      <div className={open ? styles.active : styles.inactive}>
        <ul>
          <li className="dropdownItem" onClick={() => handleDispatch('all')}>
            <p>Show All</p>
          </li>
          <li className="dropdownItem" onClick={() => handleDispatch('follow')}>
            <p>Follow</p>
          </li>
          <li
            className="dropdownItem"
            onClick={() => handleDispatch('following')}
          >
            <p>Following</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
