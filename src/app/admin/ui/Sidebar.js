"use client";
import { FaChartPie, FaUser, FaFilm, FaTv, FaTable } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const currentPath = usePathname()
  const isActive = (path) => {
    return currentPath === path
  }
  const side = [
    {
      name: 'myAdmin',
      url: '/admin',
      icon: <FaChartPie className="mr-3" />,
    },
    {
      name: 'Films',
      url: '/admin/films',
      icon: <FaFilm className="mr-3" />,
    },
    {
      name: 'Series',
      url: '/admin/series',
      icon: <FaTv className="mr-3" />,
    },
    {
      name: 'Users',
      url: '/admin/users',
      icon: <FaUser className="mr-3" />,
    },
    {
      name: 'Tables',
      url: '/admin/tables',
      icon: <FaTable className="mr-3" />,
    }
  ]
  return (
    <div className="hidden w-64 hover:text-slate-50 z-50 bg-indigo-800 text-white lg:flex flex-col">
      <div className="p-4 text-lg font-bold">Dashboard</div>
      <nav className="mt-5 flex-1">
        {side.map((sides, i) => {
          return(
            <div key={i}>
              <Link href={sides.url} className={isActive(sides.url)? 'bg-gray-700 flex items-center py-2.5 px-4 rounded-lg': 'flex items-center py-2.5 px-4 rounded-lg hover:bg-indigo-700'}>
              {sides.icon}
              <span>{sides.name}</span>
              </Link>
            </div>
          )
        })}
      </nav>
    </div>
  );
}
