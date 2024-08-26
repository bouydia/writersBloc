"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Home, LineChart, Users } from "lucide-react";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/dashboard/users", label: "Users", icon: Users },
  { href: "#", label: "Analytics", icon: LineChart },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
      {links.map(({ href, label, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-white hover:bg-purple-600 ${
            currentPath === href ? "text-white bg-purple-600" : ""
          }`}
        >
          <Icon className="h-4 w-4" />
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;