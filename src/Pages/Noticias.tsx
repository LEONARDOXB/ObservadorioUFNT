
import { Newspaper, Flame, Share2, ThumbsUp, MessageCircle } from 'lucide-react'

function Noticias() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 via-yellow-500 to-green-500">
      {/* Header */}
      <header className="bg-orange-900/30 backdrop-blur-md border-b border-orange-200/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Newspaper className="h-8 w-8 text-yellow-300" />
              <h1 className="text-2xl font-bold text-white">NotíciasBR Express</h1>
            </div>
            <div className="flex items-center gap-4">
              <Flame className="h-6 w-6 text-orange-300" />
              <span className="text-white font-medium">Trending</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Featured News */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="bg-orange-900/20 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 border border-orange-200/20">
            <img 
              src="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?auto=format&fit=crop&w=800"
              alt="Amazônia"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">URGENTE</span>
                <span className="text-yellow-200 text-sm">Há 2 horas</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-3">Cientistas Descobrem Dinossauros Vivos na Amazônia</h2>
              <p className="text-orange-100 mb-4">Grupo de pesquisadores afirma ter encontrado espécies pré-históricas vivendo em área isolada da floresta...</p>
              <div className="flex items-center gap-4 text-orange-200">
                <button className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  <span>2.5K</span>
                </button>
                <button className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  <span>483</span>
                </button>
                <button className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span>Compartilhar</span>
                </button>
              </div>
            </div>
          </article>

          <article className="bg-orange-900/20 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 border border-orange-200/20">
            <img 
              src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800"
              alt="Tecnologia"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">TECH</span>
                <span className="text-yellow-200 text-sm">Há 5 horas</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-3">Novo App Brasileiro Promete Traduzir Pensamentos</h2>
              <p className="text-orange-100 mb-4">Startup nacional desenvolve tecnologia revolucionária que permite ler e traduzir pensamentos em tempo real...</p>
              <div className="flex items-center gap-4 text-orange-200">
                <button className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  <span>1.8K</span>
                </button>
                <button className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  <span>256</span>
                </button>
                <button className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span>Compartilhar</span>
                </button>
              </div>
            </div>
          </article>

          <article className="bg-orange-900/20 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 border border-orange-200/20">
            <img 
              src="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?auto=format&fit=crop&w=800"
              alt="Política"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">POLÍTICA</span>
                <span className="text-yellow-200 text-sm">Há 8 horas</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-3">Político Promete Construir Escada Até a Lua</h2>
              <p className="text-orange-100 mb-4">Em campanha polêmica, candidato garante que vai construir escada espacial ligando Brasil à Lua...</p>
              <div className="flex items-center gap-4 text-orange-200">
                <button className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  <span>3.2K</span>
                </button>
                <button className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  <span>789</span>
                </button>
                <button className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span>Compartilhar</span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-orange-900/30 backdrop-blur-md mt-8 py-6">
        <div className="container mx-auto px-4 text-center text-orange-100">
          <p>⚠️ ATENÇÃO: Este é um site de notícias falsas criado apenas para fins de demonstração.</p>
          <p className="mt-2">Não compartilhe estas informações como verdadeiras!</p>
        </div>
      </footer>
    </div>
  )
}

export default Noticias;