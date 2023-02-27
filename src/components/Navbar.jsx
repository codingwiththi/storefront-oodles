import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 ">
          <div className="flex items-center justify-start flex-grow ">
            {/* <!-- Logo e categorias --> */}
            <div className="flex-shrink-0 md:hidden ">
              {/* <img className="h-8 w-8" src="logo.png" alt="Logo da Oodles"/> */}
              <h1 className="text-gray-800 font-bold text-4xl font-everlooser">
                OO
              </h1>
            </div>
            <div className="hidden md:block ">
              <div className=" flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-900 font-medium"
                >
                  Masculino
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-900 font-medium"
                >
                  Feminino
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-900 font-medium"
                >
                  Acessórios
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Nome da loja --> */}
          <div className="flex items-center justify-center sm:pr-10   ">
            {/* <div className="pr-6"> */}
            <h1 className="text-gray-800 font-bold text-5xl font-everlooser self-end">
              OODLES
            </h1>
            {/* </div> */}
          </div>
          <div className="flex items-center justify-end flex-grow ">
            {/* <!-- Botão de home --> */}
            <a
              href="#"
              className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            {/* <!-- Carrinho de compras --> */}
            <div className="ml-4 relative">
              <button className="flex text-gray-800 hover:text-gray-900 items-center p-2 rounded-full bg-white shadow-sm border hover:border-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </button>
              {/* <!-- Indicador de itens no carrinho --> */}
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-1 -mt-1 text-xs font-bold leading-none text-white bg-black rounded-full">
                3
              </span>
            </div>
            <div className="ml-4 relative">
              <button className="flex text-gray-800 hover:text-gray-900 items-center p-2 rounded-full bg-white shadow-sm border hover:border-gray-900 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
