import { v4 as uuidv4 } from 'uuid';
import scrollReveal from 'scrollreveal';
import React, { useRef, useEffect, CSSProperties, ReactElement, ReactNode, Fragment } from 'react';
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
}

const ScrollReveal = ({
  component,
  children,
  style,
  delay = 500,
  delayBetween = 500,
  className = '',
  origin = 'bottom',
  easing = 'cubic-bezier(0.5, 0, 0, 1)',
  interval = 0,
  distance = '50px',
}: ScrollRevealProps) => {
  const singleRef = useRef<HTMLDivElement>(null);
  const revealsRef = useRef<NodeListOf<Element>[]>([]);
  revealsRef.current = [];

  const addToRefs = (el: any) => {
    if (el && !revealsRef.current.includes(el)) {
      revealsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (Array.isArray(children)) {
      // @ts-ignore
      scrollReveal().reveal(revealsRef?.current, {
        reset: false,
        // delay: i === 0 ? delay : delay + i * delayBetween,
        delay,
        easing,
        distance,
        origin,
        interval,
      });
    } else if (singleRef.current)
      scrollReveal().reveal(singleRef.current, {
        reset: false,
        delay,
        easing,
        distance,
        origin,
        interval,
      });
  }, [children, component, delay, delayBetween, distance, easing, interval, origin, singleRef]);

  const singleProps = {
    ref: singleRef,
    style,
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
    { style, className },
    children.map((item) => {
      const addToRefsProps = {
        key: uuidv4(),
        ref: addToRefs,
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
