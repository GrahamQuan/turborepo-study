'use client';

import * as React from 'react';

export function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={props.type || 'button'}
      className={`text-white font-bold px-3 py-2 rounded-lg bg-yellow-500 ${className}`}
      // className={`text-white px-3 py-2 rounded-lg bg-primary ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
