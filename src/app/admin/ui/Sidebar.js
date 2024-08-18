"use client";
import { FaChartPie, FaUser, FaFilm, FaTv, FaTable } from "react-icons/fa";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="hidden w-64 hover:text-slate-50 z-50 bg-indigo-800 text-white lg:flex flex-col">
      <div className="p-4 text-lg font-bold">Dashboard</div>
      <nav className="mt-5 flex-1">
        <Link
          href="/admin"
          className="flex items-center py-2.5 px-4 rounded-lg active:bg-gray-700 hover:bg-indigo-700"
        >
          <FaChartPie className="mr-3" />
          myAdmin
        </Link>
        <Link
          href="/admin/films"
          className="flex items-center py-2.5 px-4 rounded-lg active:bg-gray-700 hover:bg-indigo-700"
        >
          <FaFilm className="mr-3" />
          Films
        </Link>
        <Link
          href="/admin/series"
          className="flex items-center py-2.5 px-4 rounded-lg active:bg-gray-700 hover:bg-indigo-700"
        >
          <FaTv className="mr-3" />
          Series
        </Link>
        <Link
          href="/admin/users"
          className="flex items-center py-2.5 px-4 rounded-lg active:bg-gray-700 hover:bg-indigo-700"
        >
          <FaUser className="mr-3" />
          Users
        </Link>
        <Link
          href="/admin/tables"
          className="flex items-center py-2.5 px-4 rounded-lg active:bg-gray-700 hover:bg-indigo-700"
        >
          <FaTable className="mr-3" />
          Tables
        </Link>
      </nav>
    </div>
  );
}
