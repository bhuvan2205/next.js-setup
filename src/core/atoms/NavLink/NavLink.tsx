import Link from 'next/link';
import { NavLinkProps } from './NavLink.type';
import React from 'react';

const NavLink = (props: NavLinkProps) => {
  const { text } = props || {};
  return (
    <li className="flex">
      <Link href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">
        {text}
      </Link>
    </li>
  );
};

export default NavLink;
