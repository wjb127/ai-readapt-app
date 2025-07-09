'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, BookOpen, MessageSquare, List } from 'lucide-react'

export default function ExamplePassage() {
  const [activeTab, setActiveTab] = useState('passage')
  const [showAnswer, setShowAnswer] = useState(false)

  const mockPassage = {
    title: "The Future of Remote Work",
    difficulty: "Intermediate",
    readingTime: "3-4 minutes",
    content: `The COVID-19 pandemic has fundamentally transformed the way we work, accelerating the adoption of remote work practices that were once considered experimental. Companies worldwide have discovered that many tasks can be performed effectively from home, leading to a permanent shift in workplace culture.

This transformation has brought both opportunities and challenges. On one hand, employees enjoy greater flexibility and work-life balance. They can avoid lengthy commutes, spend more time with family, and often experience increased productivity in their personalized work environments. Companies, too, benefit from reduced overhead costs and access to a global talent pool.

However, remote work is not without its drawbacks. The lack of face-to-face interaction can lead to feelings of isolation and make collaboration more challenging. Building company culture and maintaining team cohesion requires new approaches and tools. Additionally, the blurred boundaries between work and personal life can result in burnout if not properly managed.

As we move forward, the future of work will likely be hybrid, combining the best aspects of both remote and in-office work. Organizations must adapt their policies and invest in technology to support this new paradigm effectively.`,
    questions: [
      {
        question: "What was the main catalyst for the widespread adoption of remote work?",
        options: [
          "A) Technological advances",
          "B) The COVID-19 pandemic",
          "C) Employee demands",
          "D) Cost reduction needs"
        ],
        correct: 1
      },
      {
        question: "According to the passage, what is a benefit of remote work for companies?",
        options: [
          "A) Improved employee health",
          "B) Better work-life balance",
          "C) Access to global talent",
          "D) Reduced collaboration needs"
        ],
        correct: 2
      }
    ],
    explanation: {
      korean: "이 지문은 코로나19 팬데믹이 원격 근무의 확산에 미친 영향과 그로 인한 변화를 다루고 있습니다. 원격 근무의 장점과 단점을 균형있게 제시하며, 미래의 근무 형태가 하이브리드 모델이 될 것이라고 전망합니다.",
      keyWords: [
        { word: "fundamentally", meaning: "근본적으로", pronunciation: "/ˌfʌndəˈmentəli/" },
        { word: "accelerating", meaning: "가속화하는", pronunciation: "/ækˈseləreɪtɪŋ/" },
        { word: "paradigm", meaning: "패러다임, 모델", pronunciation: "/ˈpærədaɪm/" },
        { word: "cohesion", meaning: "결속력, 응집력", pronunciation: "/koʊˈhiːʒən/" }
      ],
      grammar: [
        "현재완료 시제: 'has fundamentally transformed' - 과거에 시작되어 현재까지 영향을 미치는 상황",
        "관계대명사 that: 'practices that were once considered' - 앞의 명사를 수식하는 관계절",
        "분사구문: 'leading to a permanent shift' - 결과를 나타내는 현재분사구문"
      ]
    }
  }

  return (
    <section id="example" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            실제 학습 경험을 미리 체험해보세요
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI가 생성한 독해 지문과 상세한 해설을 통해 Readapt AI의 학습 품질을 직접 확인해보세요.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* 탭 네비게이션 */}
            <div className="border-b border-gray-200">
              <nav className="flex">
                <button
                  onClick={() => setActiveTab('passage')}
                  className={`flex-1 py-4 px-6 text-center font-medium ${
                    activeTab === 'passage' 
                      ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <BookOpen className="inline-block mr-2" size={20} />
                  독해 지문
                </button>
                <button
                  onClick={() => setActiveTab('explanation')}
                  className={`flex-1 py-4 px-6 text-center font-medium ${
                    activeTab === 'explanation' 
                      ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <MessageSquare className="inline-block mr-2" size={20} />
                  한국어 해석
                </button>
                <button
                  onClick={() => setActiveTab('vocabulary')}
                  className={`flex-1 py-4 px-6 text-center font-medium ${
                    activeTab === 'vocabulary' 
                      ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <List className="inline-block mr-2" size={20} />
                  핵심 단어
                </button>
              </nav>
            </div>

            {/* 탭 콘텐츠 */}
            <div className="p-8">
              {activeTab === 'passage' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{mockPassage.title}</h3>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {mockPassage.difficulty}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        {mockPassage.readingTime}
                      </span>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none text-gray-700 leading-relaxed mb-8">
                    {mockPassage.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="space-y-6">
                    {mockPassage.questions.map((q, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">
                          {index + 1}. {q.question}
                        </h4>
                        <div className="space-y-2">
                          {q.options.map((option, optIndex) => (
                            <label key={optIndex} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                              <input
                                type="radio"
                                name={`question-${index}`}
                                className="mr-3 text-primary-600"
                              />
                              <span className={showAnswer && optIndex === q.correct ? 'text-green-600 font-semibold' : ''}>
                                {option}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <button
                      onClick={() => setShowAnswer(!showAnswer)}
                      className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2 mx-auto"
                    >
                      {showAnswer ? '정답 숨기기' : '정답 보기'}
                      {showAnswer ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'explanation' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">전체 지문 해석</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">
                      {mockPassage.explanation.korean}
                    </p>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mt-8 mb-4">문법 구조 분석</h4>
                  <div className="space-y-3">
                    {mockPassage.explanation.grammar.map((item, index) => (
                      <div key={index} className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'vocabulary' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">핵심 단어 & 표현</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mockPassage.explanation.keyWords.map((item, index) => (
                      <div key={index} className="bg-green-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-bold text-green-800 text-lg">{item.word}</span>
                          <span className="text-sm text-green-600">{item.pronunciation}</span>
                        </div>
                        <p className="text-green-700">{item.meaning}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              이런 고품질 학습 콘텐츠를 매일 받아보세요
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              지금 무료로 시작하기
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 