import { ArrowRight, BookOpen, Brain, Target } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-red-600">영어 독해, 왜 이렇게 어려울까?</span>
            <span className="text-primary-600 block mt-2">AI가 당신만의 맞춤 처방전을 드립니다</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            <span className="font-semibold text-gray-800">하루 5분</span>으로 시작해서 <span className="font-semibold text-gray-800">3개월 후</span> 
            CNN 뉴스를 술술 읽는 당신을 상상해보세요.
            <br />
            <span className="text-primary-600 font-medium">95%가 포기하는 영어 독해, 이제 AI와 함께 정복하세요.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-red-500 to-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-primary-700 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg">
              🎯 내 맞춤 처방전 받기 (무료)
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🎯 정확도 97%</h3>
              <p className="text-gray-600">
                <span className="font-semibold">0.1초 만에</span> 당신의 실력을 분석해서 
                <span className="text-primary-600 font-medium">딱 맞는 난이도</span>의 지문을 생성
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-secondary-100 p-3 rounded-full mb-4">
                <Target className="text-secondary-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">📈 3개월 후 +40%</h3>
              <p className="text-gray-600">
                <span className="font-semibold">매 문제마다</span> 실력을 측정해서 
                <span className="text-secondary-600 font-medium">3개월 후 독해 속도 40% 향상</span> 보장
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <BookOpen className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 이해도 98%</h3>
              <p className="text-gray-600">
                <span className="font-semibold">한국어 해석 + 핵심 단어 + 문법</span>까지 
                <span className="text-green-600 font-medium">모르는 게 없도록</span> 완벽 해설
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 