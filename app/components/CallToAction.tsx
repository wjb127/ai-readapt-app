import { ArrowRight, CheckCircle } from 'lucide-react'

export default function CallToAction() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-yellow-300">⚡ 지금 시작하면</span>
            <br />
            <span className="text-white">3개월 후 다른 사람이 됩니다</span>
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            <span className="font-semibold text-white">상상해보세요:</span> 
            해외 뉴스를 술술 읽고, 영어 회의에서 자신감 있게 발표하는 모습을.
            <br />
            <span className="bg-white/20 px-3 py-1 rounded-full text-white font-medium">
              💝 베타 테스터 특별 혜택: 평생 50% 할인
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg text-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 flex items-center gap-2 shadow-2xl animate-pulse">
              🚀 베타 테스터 신청하기 (무료)
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              📊 성공 사례 보기
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="text-green-300" size={24} />
              <span className="text-white font-medium">💳 신용카드 없이 시작</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="text-green-300" size={24} />
              <span className="text-white font-medium">🎁 베타 기간 완전 무료</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="text-green-300" size={24} />
              <span className="text-white font-medium">⚡ 1분 만에 가입 완료</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500/20 to-yellow-500/20 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border-2 border-yellow-400/50">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-yellow-300 mb-4">
                ⚠️ 베타 테스터 모집 마감 임박! (100명 한정)
              </h3>
              <p className="text-white text-lg">
                <span className="font-bold text-yellow-300">지금 신청하면:</span> 
                평생 50% 할인 + 1:1 맞춤 학습 컨설팅 + 우선 기능 체험
                <br />
                <span className="text-red-300 font-medium">
                  ⏰ 이 기회를 놓치면 정가로만 이용 가능합니다
                </span>
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-yellow-200 text-sm font-medium">
              💫 이미 1,247명이 대기 중... 당신의 자리는 아직 남아있습니다!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 