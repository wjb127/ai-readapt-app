import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import KeyFeatures from './components/KeyFeatures'
import HowItWorks from './components/HowItWorks'
import ExamplePassage from './components/ExamplePassage'
import CallToAction from './components/CallToAction'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProblemSolution />
      <KeyFeatures />
      <HowItWorks />
      <ExamplePassage />
      <CallToAction />
      <Footer />
    </main>
  )
} 