import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Intercept framer-motion globally using vanilla JS to satisfy the compiler
vi.mock('framer-motion', () => {
  const ReactComponent = ({ children, ...props }) => {
    // Strip framer-motion unique animation configurations
    const { initial, animate, exit, transition, whileHover, whileTap, ...cleanProps } = props;
    
    // Equivalent to: return <div {...cleanProps}>{children}</div>;
    return React.createElement('div', cleanProps, children);
  };
  
  return {
    __esModule: true,
    motion: {
      div: ReactComponent,
      span: ReactComponent,
      a: ReactComponent,
      p: ReactComponent,
    },
    AnimatePresence: ({ children }) => children,
  };
});
