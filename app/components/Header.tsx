'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-600">Readapt AI</h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                기능
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                사용법
              </a>
              <a href="#example" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                예시
              </a>
              <a href="#cta" className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                무료로 시작하기
              </a>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary-600 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <a href="#features" className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              기능
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              사용법
            </a>
            <a href="#example" className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              예시
            </a>
            <a href="#cta" className="bg-primary-600 text-white block px-3 py-2 rounded-lg text-base font-medium hover:bg-primary-700 transition-colors mx-3 mt-4">
              무료로 시작하기
            </a>
          </div>
        </div>
      )}
    </header>
  )
} 