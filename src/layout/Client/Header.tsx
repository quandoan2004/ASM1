import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#4f832e] to-[#a59a91]">
      <div className="container mx-auto p-4 flex justify-between items-center max-w-[80%]">
        <div className="flex items-center space-x-4 ml-[20%]">
          <div className="relative">
            <input
              type="text"
              placeholder="Suchen Sie nach Produkten, Marken und mehr"
              className="bg-white border border-gray-300 rounded-xl px-4 py-2 w-[500px]"
            />

            {/* icon search */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <circle cx="14" cy="14" r="12" />
                <path d="m23 23l7 7" />
              </g>
            </svg>
          </div>
        </div>
        <div className="text-gray-100 ml-[10%]">En</div>
        <div className="flex items-center space-x-4 text-gray-100 ml-auto gap-5">
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11.5 14c4.14 0 7.5 1.57 7.5 3.5V20H4v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13zM11.5 5A3.5 3.5 0 0 1 15 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 8.5A3.5 3.5 0 0 1 11.5 5m0 1A2.5 2.5 0 0 0 9 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 14 8.5A2.5 2.5 0 0 0 11.5 6"
              />
            </svg>
            <a href="/register">Account</a>
          </div>
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" stroke-width="1.9">
                <path d="M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301C4.378 9 6.148 9 9.685 9h4.63c3.538 0 5.306 0 6.207 1.154c.901 1.153.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91Z" />
                <path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4" />
                <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 13v4m8-4v4m-4-4v4"
                />
              </g>
            </svg>
            <a href="#">Cart</a>
          </div>
        </div>
      </div>

      <div className="max-w-[80%] mx-auto border-t-2">
        <div className="container mx-auto p-4 flex justify-between">
          <div className="relative group">
            <button className="flex items-center space-x-2 text-gray-100">
              <a href="/">
                <span>Beleuchtung</span>
              </a>
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center space-x-2 text-gray-100">
              <span>Growbox</span>
            </button>
            <div className="absolute -ml-7 mt-2 w-[130px] bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <NavLink
                to="/list"
                className="block px-4 py-2 text-black hover:bg-gray-100 active:bg-gray-600"
              >
                Komplettsets
              </NavLink>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center space-x-2 text-gray-100">
              <span>Dünger</span>
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center space-x-2 text-gray-100">
              <span>Erde & Substrate</span>
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center space-x-2 text-gray-100">
              <span>Töpfe & Behälter</span>
            </button>
            <div className="absolute -ml-2 mt-2 w-[130px] bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <a
                href="#"
                className="block px-4 py-2 text-black hover:bg-gray-100"
              >
                Eckige Töpfe
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-black hover:bg-gray-100"
              >
                Runde Töpfe
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-black hover:bg-gray-100"
              >
                Untersetzer
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-black hover:bg-gray-100"
              >
                Pflanzschalen
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center space-x-2 text-gray-100">
              <span>Bewässerung</span>
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center space-x-2 text-gray-100">
              <span>Pflanzen & Gärtnern</span>
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center space-x-2 text-gray-100">
              <span>Lüftung & Klimaanlage</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
