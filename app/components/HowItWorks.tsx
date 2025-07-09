import { Bell, BookOpen, TrendingUp, MessageCircle } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Bell,
      title: "매일 푸시 알림",
      description: "매일 같은 시간에 새로운 독해 지문이 준비되었다는 알림을 받습니다.",
      color: "bg-blue-500"
    },
    {
      number: "02",
      icon: BookOpen,
      title: "지문 해석 & 문제 풀이",
      description: "AI가 생성한 맞춤형 지문을 읽고 이해도 문제를 풀어보세요.",
      color: "bg-green-500"
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "난이도 자동 조정",
      description: "응답 시간과 정답률을 분석하여 다음 지문의 난이도를 최적화합니다.",
      color: "bg-purple-500"
    },
    {
      number: "04",
      icon: MessageCircle,
      title: "피드백 & 성장",
      description: "상세한 해설과 함께 학습 성과를 확인하고 꾸준히 실력을 향상시킵니다.",
      color: "bg-orange-500"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            간단한 4단계로 시작하는 영어 독해 학습
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            복잡한 설정 없이 바로 시작할 수 있는 직관적인 학습 프로세스입니다.
          </p>
        </div>

        <div className="relative">
          {/* 연결선 */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 to-orange-500 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative z-10">
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.color} text-white mb-4`}>
                      <step.icon size={24} />
                    </div>
                    <div className="text-sm font-semibold text-gray-500 mb-2">
                      STEP {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              지금 시작하면 첫 주는 무료입니다
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              가입 후 즉시 오늘의 독해 지문을 받아보고, 
              7일간 모든 프리미엄 기능을 무료로 체험해보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                무료로 시작하기
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                데모 영상 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 