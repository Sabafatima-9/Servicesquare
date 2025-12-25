// Minimal global declarations to silence editor TypeScript errors
declare module 'lucide-react';

// Provide a permissive JSX.IntrinsicElements so JSX elements are recognized
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

export {};
