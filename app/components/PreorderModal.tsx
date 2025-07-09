'use client'

import { useState } from 'react'
import { X, Mail, Gift, Shield, CheckCircle } from 'lucide-react'
import { savePreorder } from '../../lib/supabase'

interface PreorderModalProps {
  isOpen: boolean
  onClose: () => void
  service: string
}

export default function PreorderModal({ isOpen, onClose, service }: PreorderModalProps) {
  const [email, setEmail] = useState('')
  const [marketingOptIn, setMarketingOptIn] = useState(false)
  const [privacyAgreed, setPrivacyAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !privacyAgreed) {
      alert('이메일과 개인정보처리방침 동의는 필수입니다.')
      return
    }

    setIsSubmitting(true)
    
    try {
      const result = await savePreorder(service, email, marketingOptIn)
      
      if (result.success) {
        setIsSuccess(true)
        setTimeout(() => {
          onClose()
          setIsSuccess(false)
          setEmail('')
          setMarketingOptIn(false)
          setPrivacyAgreed(false)
        }, 2000)
      } else {
        alert('사전예약 중 오류가 발생했습니다. 다시 시도해주세요.')
      }
    } catch (error) {
      console.error('Preorder error:', error)
      alert('사전예약 중 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              사전예약 완료! 🎉
            </h3>
            <p className="text-gray-600">
              출시 소식을 가장 먼저 알려드리겠습니다.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Gift className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                🚀 아직 준비중입니다
              </h3>
              <p className="text-gray-600">
                사전예약하시면 <span className="font-semibold text-primary-600">출시 시 50% 할인</span> 혜택을 받을 수 있습니다!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  이메일 주소 *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={privacyAgreed}
                    onChange={(e) => setPrivacyAgreed(e.target.checked)}
                    className="mt-1 mr-3 text-primary-600 focus:ring-primary-500"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-700 flex items-center">
                    <Shield className="mr-1" size={16} />
                    <span className="font-medium text-red-600">개인정보처리방침</span>에 동의합니다 (필수)
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="marketing"
                    checked={marketingOptIn}
                    onChange={(e) => setMarketingOptIn(e.target.checked)}
                    className="mt-1 mr-3 text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor="marketing" className="text-sm text-gray-700 flex items-center">
                    <Mail className="mr-1" size={16} />
                    마케팅 정보 수신에 동의합니다 (선택)
                    <span className="ml-2 text-xs text-gray-500">
                      - 출시 소식, 할인 혜택 등
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !email || !privacyAgreed}
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? '처리 중...' : '🎁 사전예약하고 50% 할인받기'}
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                사전예약은 구매 의무가 없으며, 언제든지 취소할 수 있습니다.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
} 