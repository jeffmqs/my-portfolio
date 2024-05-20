"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: 'home',
    path: "/",
  },
  {
    name: 'serviços',
    path: "/services",
  },
  {
    name: 'sobre',
    path: "/resume",
  },
  {
    name: 'trabalhos',
    path: "/work",
  },
  {
    name: 'contato',
    path: "/contact",
  },
];

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b border-accent"
        } capitalize font-medium hover:text-accent transition-all`}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
