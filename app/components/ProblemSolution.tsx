import { X, Check } from 'lucide-react'

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-red-600">"또 영어 포기했어..."</span>
            <br />
            <span className="text-primary-600">이런 경험, 당신도 있지 않나요?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <span className="font-semibold">매일 30분씩 공부했는데 여전히 어려운 영어 독해...</span>
            <br />
            이제 그 이유를 알고, 정확한 해결책을 찾아보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-red-50 p-8 rounded-xl border border-red-200">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <X className="text-red-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-red-900">😤 왜 계속 실패할까?</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={16} />
                <p className="text-red-800">
                  <strong>💀 "너무 쉬워서 지루해"</strong> → 갑자기 너무 어려워짐
                </p>
              </div>
              <div className="flex items-start">
                <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={16} />
                <p className="text-red-800">
                  <strong>😵 "이 단어가 뭔 뜻이지?"</strong> → 맥락 없는 단순 암기만 반복
                </p>
              </div>
              <div className="flex items-start">
                <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={16} />
                <p className="text-red-800">
                  <strong>😴 "또 똑같은 패턴"</strong> → 3일 후 흥미 잃고 포기
                </p>
              </div>
              <div className="flex items-start">
                <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={16} />
                <p className="text-red-800">
                  <strong>🤷 "내가 늘고 있나?"</strong> → 실력 향상을 체감할 수 없음
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-xl border border-green-200">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <Check className="text-green-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-green-900">🎯 Readapt AI의 똑똑한 해결책</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-3 flex-shrink-0" size={16} />
                <p className="text-green-800">
                  <strong>🎯 "딱 내 수준이네!"</strong> → AI가 당신의 실력을 0.1초마다 분석해서 최적 난이도 제공
                </p>
              </div>
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-3 flex-shrink-0" size={16} />
                <p className="text-green-800">
                  <strong>💡 "아, 이런 뜻이었구나!"</strong> → 한국어 해석 + 핵심 단어 + 문법까지 완벽 설명
                </p>
              </div>
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-3 flex-shrink-0" size={16} />
                <p className="text-green-800">
                  <strong>🔥 "오늘은 뭐가 나올까?"</strong> → 매일 새로운 주제로 호기심 자극
                </p>
              </div>
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-3 flex-shrink-0" size={16} />
                <p className="text-green-800">
                  <strong>📈 "확실히 늘고 있어!"</strong> → 실시간 성장 데이터로 성취감 극대화
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 