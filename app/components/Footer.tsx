import { Mail, MessageCircle, Twitter, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">Readapt AI</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              AI 기반 맞춤형 영어 독해 훈련으로 매일 5분, 꾸준한 영어 실력 향상을 경험하세요.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Mail size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">서비스</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">기능 소개</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">요금제</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">모바일 앱</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">지원</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">도움말</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">문의하기</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">개인정보처리방침</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">이용약관</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Readapt AI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                이용약관
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                쿠키 정책
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 