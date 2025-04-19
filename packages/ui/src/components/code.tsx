import { type JSX } from 'react';
import { cn } from '../lib/utils';

export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <code className={cn('text-red-500 font-bold', className)}>{children}</code>
  );
}
