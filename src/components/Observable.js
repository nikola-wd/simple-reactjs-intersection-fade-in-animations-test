import React, { useEffect, Fragment, useRef } from 'react';
import { IntersectionTransitions } from '../classes/IntersectionTransitions';

const Observable = (props) => {
  const { children, mode = false, inOut = false } = props;
  const helperRef = useRef(children);

  useEffect(() => {
    if (children && helperRef?.current) {
      const el = helperRef.current.nextElementSibling;
      console.log(el);
      el.classList.add('ivtr');
      if (mode) el.classList.add(`ivtr--${mode}`);
      if (inOut) el.classList.add('ivtr--in-out');
      new IntersectionTransitions(el);
    }
  }, [children, helperRef]);

  return (
    <Fragment>
      <span ref={helperRef} style={{ display: 'none', position: 'absolute' }} />
      {children}
    </Fragment>
  );
};

export default Observable;