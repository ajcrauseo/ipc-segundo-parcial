"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Capítulo 10", href: "/cap10" },
    { name: "Capítulo 11", href: "/cap11" },
    { name: "Capítulo 12", href: "/cap12" },
    { name: "Capítulo 13", href: "/cap13" },
    { name: "Capítulo 14", href: "/cap14" },
    { name: "Capítulo 15", href: "/cap15" },
  ];

  return (
    <nav className="bg-white shadow-md w-full z-10 top-0 left-0 fixed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Título */}
          <Link href="/" className="text-2xl font-semibold text-gray-800">
            Segundo Parcial - IPC
          </Link>

          {/* Menú desktop */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="px-4 py-3 space-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-gray-900"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
