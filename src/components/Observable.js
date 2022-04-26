import React, { useEffect, Fragment, useRef } from 'react';
import { IntersectionTransitions } from '../classes/IntersectionTransitions';

const Observable = (props) => {
  const {
    children,
    mode = false,
    inOut = false,
    rootMargin = '80px 0px 0px 0px',
    treshold = 0.35,
    trOffset = '30px',
    trDelay = '0s',
    trDuration = '0.4s',
    as = Fragment,
  } = props;
  const helperRef = useRef(children);

  const Wrapper = as;

  useEffect(() => {
    if (children && helperRef?.current) {
      const el = helperRef.current.nextElementSibling;
      console.log(el);
      el.style.setProperty('--ivtr-offset', trOffset);
      el.style.setProperty('--ivtr-delay', trDelay);
      el.style.setProperty('--ivtr-duration', trDuration);

      el.classList.add('ivtr');
      if (mode) el.classList.add(`ivtr--${mode}`);
      if (inOut) el.classList.add('ivtr--in-out');
      new IntersectionTransitions({ el, rootMargin, treshold });
    }
  }, [children, helperRef]);

  return (
    <Fragment>
      <span ref={helperRef} style={{ display: 'none', position: 'absolute' }} />
      <Wrapper>{children}</Wrapper>
    </Fragment>
  );
};

export default Observable;
