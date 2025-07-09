import { X, Check } from 'lucide-react'

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            기존 영어 학습의 한계를 뛰어넘다
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            일반적인 영어 앱들의 문제점과 Readapt AI만의 차별화된 해결책을 확인해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-red-50 p-8 rounded-xl border border-red-200">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <X className="text-red-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-red-900">기존 앱들의 문제점</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={16} />
                <p className="text-red-800">
                  <strong>획일적인 콘텐츠:</strong> 모든 사용자에게 동일한 지문과 난이도를 제공
                </p>
              </div>
              <div className="flex items-start">
                <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={16} />
                <p className="text-red-800">
                  <strong>부족한 맥락 설명:</strong> 단순한 정답 확인만 제공하고 깊이 있는 해설 부족
                </p>
              </div>
              <div className="flex items-start">
                <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={16} />
                <p className="text-red-800">
                  <strong>지속성 부족:</strong> 반복적인 패턴으로 인한 학습 동기 저하
                </p>
              </div>
              <div className="flex items-start">
                <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={16} />
                <p className="text-red-800">
                  <strong>실력 정체:</strong> 개인별 학습 데이터 분석 없이 일방적인 진도 관리
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-xl border border-green-200">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <Check className="text-green-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-green-900">Readapt AI의 해결책</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-3 flex-shrink-0" size={16} />
                <p className="text-green-800">
                  <strong>AI 맞춤형 생성:</strong> 개인의 실력과 관심사를 분석하여 최적화된 지문 제공
                </p>
              </div>
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-3 flex-shrink-0" size={16} />
                <p className="text-green-800">
                  <strong>완벽한 학습 지원:</strong> 한국어 해석, 핵심 단어, 구문 분석까지 종합적 피드백
                </p>
              </div>
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-3 flex-shrink-0" size={16} />
                <p className="text-green-800">
                  <strong>지속적인 동기부여:</strong> 매일 새로운 주제와 다양한 난이도로 흥미 유지
                </p>
              </div>
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-3 flex-shrink-0" size={16} />
                <p className="text-green-800">
                  <strong>데이터 기반 성장:</strong> 응답 시간과 정답률을 분석하여 실력 향상 최적화
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 