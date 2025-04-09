import React from 'react';
import { AlertTriangle, XCircle } from 'lucide-react';

function Noticias() {
  return (
    <div className="min-h-screen bg-red-50">
      <header className="bg-red-600 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle size={32} />
              <h1 className="text-2xl font-bold">Verificador de Fake News</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-red-600 mb-8">Fake News Desmascaradas</h2>
          
          <div className="space-y-8">
            {/* Fake News 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Laboratório de Pesquisa"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="text-red-600" size={24} />
                  <span className="text-red-600 font-bold">FAKE NEWS</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Brasil anuncia vacina 100% nacional contra a dengue</h3>
                <p className="text-gray-700 mb-4">
                  Esta notícia que circula nas redes sociais é falsa. A única vacina contra dengue aprovada pela Anvisa é a Qdenga, do laboratório Takeda.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">A Verdade:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• A vacina Qdenga é produzida pelo laboratório japonês Takeda</li>
                    <li>• Foi aprovada pela Anvisa em março de 2023</li>
                    <li>• O Brasil ainda não possui vacina própria contra a dengue</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fake News 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Hospital"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="text-red-600" size={24} />
                  <span className="text-red-600 font-bold">FAKE NEWS</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Chá de boldo cura dengue em 24 horas</h3>
                <p className="text-gray-700 mb-4">
                  Esta informação que circula em grupos de mensagens é falsa e perigosa. Não existe cura natural para a dengue.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">A Verdade:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Não existe cura natural para a dengue</li>
                    <li>• O tratamento adequado requer acompanhamento médico</li>
                    <li>• Hidratação e monitoramento são essenciais</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fake News 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Mosquito"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="text-red-600" size={24} />
                  <span className="text-red-600 font-bold">FAKE NEWS</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Água sanitária na piscina mata o mosquito da dengue</h3>
                <p className="text-gray-700 mb-4">
                  Esta informação viral é falsa e perigosa. A água sanitária não é eficaz contra as larvas do mosquito e pode ser prejudicial à saúde.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">A Verdade:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Água sanitária não é aprovada para tratamento de piscinas</li>
                    <li>• O correto é usar produtos específicos para piscinas</li>
                    <li>• A melhor prevenção é eliminar água parada</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fake News 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Vacina"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="text-red-600" size={24} />
                  <span className="text-red-600 font-bold">FAKE NEWS</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Vacina contra dengue causa reação grave em 90% dos casos</h3>
                <p className="text-gray-700 mb-4">
                  Esta informação é completamente falsa. A vacina Qdenga é segura e aprovada pela Anvisa após extensivos testes clínicos.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">A Verdade:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• A vacina passou por todos os testes de segurança</li>
                    <li>• Reações graves são extremamente raras</li>
                    <li>• A maioria das reações são leves e esperadas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fake News 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1584467735867-4297ae2ebcee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Medicamentos"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="text-red-600" size={24} />
                  <span className="text-red-600 font-bold">FAKE NEWS</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Aspirina previne casos graves de dengue</h3>
                <p className="text-gray-700 mb-4">
                  Esta informação é perigosamente falsa. O uso de aspirina pode agravar o quadro da dengue e causar complicações sérias.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">A Verdade:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Aspirina é contraindicada em casos de dengue</li>
                    <li>• Pode aumentar o risco de hemorragias</li>
                    <li>• Apenas use medicamentos prescritos pelo médico</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-red-50 rounded-lg">
            <p className="text-red-600 text-sm">
              Todas as verificações são baseadas em dados oficiais do Ministério da Saúde e instituições científicas credenciadas.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-red-600 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Verificador de Fake News - Combatendo a desinformação</p>
        </div>
      </footer>
    </div>
  );
}

export default Noticias;