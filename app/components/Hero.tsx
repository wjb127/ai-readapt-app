'use client'

import { ArrowRight, BookOpen, Brain, Target } from 'lucide-react'
import { useState } from 'react'
import PreorderModal from './PreorderModal'
import { savePreorderClick } from '../../lib/supabase'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePreorderClick = async () => {
    // 버튼 클릭 이벤트 저장
    await savePreorderClick('readapt-ai')
    setIsModalOpen(true)
  }
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-red-600">영어 독해가 어려운 이유?</span>
            <span className="text-primary-600 block mt-2">AI가 내 수준에 맞춰 자동으로 만들어줍니다</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            <span className="font-semibold text-gray-800">하루 5분</span>으로 시작해서 <span className="font-semibold text-gray-800">3개월 후</span> 
            CNN 뉴스를 술술 읽는 당신을 만나보세요.
            <br />
            <span className="text-primary-600 font-medium">AI가 실시간으로 지문을 생성하고 난이도를 자동 조절합니다.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={handlePreorderClick}
              className="bg-gradient-to-r from-red-500 to-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-primary-700 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              🎯 AI 맞춤 독해 시작하기 (무료)
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
              📖 실제 지문 미리보기
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary-100 p-3 rounded-full mb-4">
                <Brain className="text-primary-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🤖 AI 자동 생성</h3>
              <p className="text-gray-600">
                <span className="font-semibold">매일 새로운 지문</span>을 AI가 자동으로 생성하여 
                <span className="text-primary-600 font-medium">무한한 학습 콘텐츠</span> 제공
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-secondary-100 p-3 rounded-full mb-4">
                <Target className="text-secondary-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">⚡ 자동 난이도 조절</h3>
              <p className="text-gray-600">
                <span className="font-semibold">실시간 분석</span>으로 내 실력에 맞춰 
                <span className="text-secondary-600 font-medium">난이도가 자동 조절</span>되는 스마트 학습
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <BookOpen className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 완벽 해설</h3>
              <p className="text-gray-600">
                <span className="font-semibold">한국어 해석 + 핵심 단어 + 문법</span>까지 
                <span className="text-green-600 font-medium">AI가 자동으로 제공</span>하는 완벽 해설
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <PreorderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        service="readapt-ai" 
      />
    </section>
  )
} 