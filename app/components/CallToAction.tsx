import { ArrowRight, CheckCircle } from 'lucide-react'

export default function CallToAction() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            지금 시작하세요
            <br />
            <span className="text-primary-200">무료 체험 7일</span>
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            매일 5분으로 시작하는 영어 독해 실력 향상의 여정.
            <br />
            AI가 당신만을 위한 맞춤형 학습 경험을 제공합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              무료로 시작하기
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              오늘의 지문 미리보기
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="text-green-300" size={24} />
              <span className="text-primary-100">신용카드 불필요</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="text-green-300" size={24} />
              <span className="text-primary-100">7일 무료 체험</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="text-green-300" size={24} />
              <span className="text-primary-100">언제든 취소 가능</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                출시 준비 중인 혁신적인 AI 학습 서비스
              </h3>
              <p className="text-primary-100 text-lg">
                베타 테스터로 참여하여 가장 먼저 Readapt AI의 강력한 기능을 경험해보세요.
                <br />
                여러분의 피드백이 더 나은 서비스를 만드는 데 도움이 됩니다.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-primary-200 text-sm">
              곧 출시될 Readapt AI와 함께 영어 독해 실력 향상의 새로운 경험을 준비하세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 