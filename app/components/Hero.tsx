import { ArrowRight, BookOpen, Brain, Target } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Personalized
            <span className="text-primary-600 block">AI Reading Coach</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            매일 5분, AI가 생성하는 맞춤형 영어 독해 훈련으로 꾸준한 영어 읽기 습관을 만들어보세요.
            <br />
            당신의 실력에 맞춰 자동으로 조정되는 똑똑한 학습 시스템입니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors flex items-center gap-2">
              무료로 시작하기
              <ArrowRight size={20} />
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
              오늘의 지문 보기
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary-100 p-3 rounded-full mb-4">
                <Brain className="text-primary-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI 맞춤형 생성</h3>
              <p className="text-gray-600">
                당신의 실력과 관심사에 맞는 독해 지문을 매일 자동으로 생성합니다.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-secondary-100 p-3 rounded-full mb-4">
                <Target className="text-secondary-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">적응형 난이도</h3>
              <p className="text-gray-600">
                응답 시간과 정답률을 분석하여 최적의 학습 난이도를 자동으로 조정합니다.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <BookOpen className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">완벽한 해설</h3>
              <p className="text-gray-600">
                한국어 해석, 핵심 단어, 구문 분석까지 완벽한 학습 피드백을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 