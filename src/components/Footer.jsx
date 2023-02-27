import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-50 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 ">
          {/* Column 1 */}
          <div className="col-span-2">
            <h3 className="text-5xl font-bold  font-everlooser">OO</h3>
            <h3 className="text-2xl font-bold mb-4">Sobre nós</h3>
            <div className="pr-40">
              <p className="mb-2">
                Somos uma marca de streetwear dedicada a fornecer roupas de alta
                qualidade e estilo a preços acessíveis.
              </p>
              <p className="mb-2">
                Nossa missão é inspirar confiança e individualidade por meio de
                nossos designs e produtos exclusivos.
              </p>
              <p className="mb-2">
                Junte-se a nós em nossa jornada para redefinir a moda
                streetwear.
              </p>
            </div>
          </div>
          {/* Column 2 */}
          <div className="flex col-span-3 justify-between ">
            <div>
              <h3 className="text-2xl font-bold mb-4">Shop</h3>
              <ul className="list-none mb-4">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Drop 5
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Masculino
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Feminino
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Acessórios
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Suporte</h3>
              <ul className="list-none mb-4">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Fale conosco
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Envio e Devoluções
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Siga-nos</h3>
              <ul className="list-none mb-4">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Company Mission */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            © 2023 Oodles Supply. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 mt-2">
            Nossa missão é inspirar confiança e individualidade por meio de
            nossos designs e produtos exclusivos.
          </p>
        </div>
      </div>
    </footer>
  );
}
