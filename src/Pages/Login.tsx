import React, { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', { email, password })
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side with illustration */}
      <div className="hidden md:flex md:w-1/2 bg-pink-100 items-center justify-center p-12 relative">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Descubra a verdade por trás das notícias
          </h1>
          <p className="text-gray-600">
            Sua plataforma para verificar fatos e combater a desinformação.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop&crop=center" 
            alt="Journalism Theme"
            className="mt-8 rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Right side with login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=200&h=200&fit=crop&crop=center" 
                alt="News Theme"
                className="h-16 w-16 rounded-xl shadow-lg object-cover"
              />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Fact Checker</h2>
            <p className="mt-2 text-sm text-gray-600">Faça login para continuar</p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Lembrar-me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Esqueceu sua senha?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Entrar
              </button>
            </div>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Não tem uma conta?{' '}
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login