import { cn } from '@workspace/ui/lib/utils';

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn('text-red-500', className)}>{children}</div>;
}
