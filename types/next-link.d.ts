declare module 'next/link' {
  import * as React from 'react';

  // Minimal, permissive Link props to satisfy imports until Next's types are available.
  export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string | URL | { pathname: string; query?: Record<string, any> };
    as?: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    locale?: string | false;
    legacyBehavior?: boolean;
  }

  const Link: React.ComponentType<LinkProps>;
  export default Link;
}
