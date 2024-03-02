"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={`min-w-[100px p-3 rounded-2xl text-center font-medium 
        ${pathName === item.path && 'bg-white text-teal-700'}`}
    >
      {item.title}
    </Link>
  );
}
export default NavLink