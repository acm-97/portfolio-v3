import { v4 as uuidv4 } from 'uuid';
import scrollReveal from 'scrollreveal';
import React, { useRef, useEffect, CSSProperties, useMemo } from 'react';
import classnames from 'classnames';

interface ScrollRevealProps {
  component?: string;
  style?: CSSProperties;
  className?: string;
  children: any;
  delay?: number;
  delayBetween?: number;
  origin?: 'top' | 'right' | 'bottom' | 'left';
  easing?: string;
  distance?: string;
  interval?: number;
  viewFactor?: number;
}

const ScrollReveal = ({
  component,
  children,
  style,
  delay = 500,
  delayBetween = 500,
  className = '',
  origin = 'bottom',
  easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  interval = 0,
  distance = '50px',
  viewFactor = 0.25,
}: ScrollRevealProps) => {
  const singleRef = useRef<HTMLDivElement>(null);
  const revealsRef = useRef<NodeListOf<Element>[]>([]);
  revealsRef.current = [];

  const addToRefs = (el: any) => {
    if (el && !revealsRef.current.includes(el)) {
      revealsRef.current.push(el);
    }
  };

  const config = useMemo(
    () => ({
      origin,
      distance,
      duration: 500,
      delay,
      interval,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing,
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),
    [delay, distance, easing, interval, origin, viewFactor],
  );

  useEffect(() => {
    if (Array.isArray(children)) {
      // @ts-ignore
      scrollReveal().reveal(revealsRef?.current, config);
    } else if (singleRef.current) scrollReveal().reveal(singleRef.current, config);
  }, [children, component, config, delay, delayBetween, distance, easing, interval, origin, singleRef]);

  const singleProps = {
    ref: singleRef,
    style: { ...style, visibility: 'hidden' },
    // 'data-testid': component,
  };

  if (!Array.isArray(children)) {
    if (typeof children.type !== 'string') {
      return React.createElement(component || 'div', { ...singleProps }, children);
    }

    return React.cloneElement(children, {
      ...singleProps,
    });
  }

  return React.createElement(
    component || 'div',
    { style: { ...style, visibility: 'hidden' }, className },
    children.map((item) => {
      const addToRefsProps = {
        key: uuidv4(),
        ref: addToRefs,
        className: item.props?.className || '',
        // 'data-testid': item.type,
      };

      if (typeof item.type !== 'string') {
        return React.createElement('div', { ...addToRefsProps }, item);
      }

      return React.cloneElement(item, { ...addToRefsProps });
    }),
  );
};

export default ScrollReveal;
