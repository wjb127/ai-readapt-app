import { Bot, TrendingUp, BookOpen, Clock, Target, Zap } from 'lucide-react'

export default function KeyFeatures() {
  const features = [
    {
      icon: Bot,
      title: "AI 자동 지문 생성",
      description: "매일 새로운 주제와 난이도의 영어 독해 지문을 AI가 자동으로 생성합니다.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "적응형 난이도 조정",
      description: "응답 시간과 정답률을 실시간으로 분석하여 최적의 학습 난이도를 제공합니다.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: BookOpen,
      title: "완벽한 구문 해설",
      description: "한국어 해석, 핵심 단어, 문법 구조까지 상세한 학습 피드백을 제공합니다.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Clock,
      title: "매일 5분 학습",
      description: "바쁜 일상 속에서도 부담 없이 지속할 수 있는 짧고 효과적인 학습 시간입니다.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Target,
      title: "개인별 맞춤 학습",
      description: "개인의 관심사와 실력 수준을 고려한 맞춤형 학습 콘텐츠를 제공합니다.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Zap,
      title: "즉시 피드백",
      description: "문제 해결 직후 즉시 상세한 해설과 함께 학습 성과를 확인할 수 있습니다.",
      color: "bg-yellow-100 text-yellow-600"
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Readapt AI의 핵심 기능
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI 기술과 학습 과학을 결합하여 가장 효과적인 영어 독해 학습 경험을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            모든 기능을 무료로 체험해보세요
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            신용카드 없이도 7일간 모든 프리미엄 기능을 자유롭게 사용할 수 있습니다.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            무료 체험 시작하기
          </button>
        </div>
      </div>
    </section>
  )
} 