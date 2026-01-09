'use client'
export default function Error(){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-4xl font-bold text-red-600 mb-4">Ocorreu um erro!</h2>
      <p className="text-lg text-gray-700 mb-8">Não foi possível carregar os dados desta página.</p>
      <button
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
        onClick={() => window.history.back()}
      >
        Voltar
      </button>
    </div>
  )
  
}