"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IconMenu } from "./icon/TabIcon";

const NavigationBar = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary flex justify-between px-5 py-3 text-slate-50 items-center z-10">
      <Link href="/" className="font-bold text-xl  text-slate-50">
        DLAN <span className="text-secondary">STUDIO</span>
      </Link>

      <ul className="hidden md:flex items-center gap-5 text-xs font-normal ">
        <Link href="/" className="hover:text-orange-300">
          Beranda
        </Link>
        <Link href="/about" className="hover:text-orange-300">
          Tentang Kami
        </Link>
        <select className="border-none outline-none bg-transparent cursor-pointer">
          <option className="text-slate-700">Kategori</option>
          <option value="template" className="text-slate-700">
            Template
          </option>
          <option value="website" className="text-slate-700">
            Website
          </option>
          <option value="furniture" className="text-slate-700">
            Furniture
          </option>
        </select>
        <Link href="/contact" className="hover:text-orange-300">
          Kontak Kami
        </Link>
      </ul>

      <IconMenu handler={() => setIsMenu(!isMenu)} />

      {isMenu && (
        <nav className="fixed right-0 w-[300px] bg-white rounded bottom-0 text-slate-800 min-h-screen flex items-start flex-col px-5 py-5">
          <button className="flex items-end justify-end border-b w-full pb-5">
            <IconMenu handler={() => setIsMenu(!isMenu)} />
          </button>

          <ul className="flex flex-col gap-4 mt-5 text-sm font-normal text-slate-600 justify-start">
            <li className="p-2">Beranda</li>
            <li className="p-2">Tentang Kami</li>
            <li className="p-2">
              <select className="border-none outline-none">
                <option>Layanan Kami</option>
                <option value="template">Template</option>
                <option value="website">Website</option>
                <option value="furniture">Furniture</option>
              </select>
            </li>
            <li className="p-2">Kontak Kami</li>
          </ul>
        </nav>
      )}
    </nav>
  );
};

export default NavigationBar;
