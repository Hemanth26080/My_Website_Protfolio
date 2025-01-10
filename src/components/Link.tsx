interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ href, children, className = '' }: LinkProps) {
  return (
    <a
      href={href}
      className={`text-gray-600 dark:text-gray-300 hover:text-blue-900 dark:hover:text-cream transition-colors ${className}`}
    >
      {children}
    </a>
  );
}