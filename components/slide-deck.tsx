"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Slide } from "./slide"
import {
  Code,
  Cpu,
  Users,
  Zap,
  Brain,
  Settings,
  ArrowRight,
  Terminal,
  Globe,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Rocket,
  Check,
  X,
} from "lucide-react"

const slides = [
  {
    id: "title",
    title: "Software 3.0",
    subtitle: "The Era of LLM-Programmable Systems",
    icon: (
      <div className="w-8 h-8 bg-white flex items-center justify-center">
        <Code className="w-6 h-6 text-black" />
      </div>
    ),
    content: (
      <div className="space-y-8 text-center">
        <p className="text-white font-medium text-3xl">"Software is changing. Again."</p>
        <p className="text-lg text-white">— Andrej Karpathy, YC Talk 2024</p>
        <div className="pt-8">
          <p className="text-zinc-500 font-mono text-sm">A minimalist exploration of the new programming paradigm</p>
        </div>
      </div>
    ),
  },
  {
    id: "evolution",
    title: "The Evolution",
    subtitle: "Three Paradigms of Software",
    icon: (
      <div className="w-8 h-8 bg-white flex items-center justify-center">
        <ArrowRight className="w-6 h-6 text-black" />
      </div>
    ),
    content: (
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="text-4xl font-mono text-white">1.0</div>
            <h3 className="text-xl font-semibold">Traditional Code</h3>
            <p className="text-white text-sm">
              Explicit instructions
              <br />
              Human-written logic
              <br />
              <span className="font-mono">if/else, loops, functions</span>
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="text-4xl font-mono text-white">2.0</div>
            <h3 className="text-xl font-semibold">Neural Networks</h3>
            <p className="text-white text-sm">
              Learned parameters
              <br />
              Data-driven optimization
              <br />
              <span className="font-mono">weights, gradients, training</span>
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="text-4xl font-mono text-white">3.0</div>
            <h3 className="text-xl font-semibold">LLM Programs</h3>
            <p className="text-white text-sm">
              Natural language instructions
              <br />
              Programmable with English
              <br />
              <span className="font-mono">prompts, context, reasoning</span>
            </p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-white italic">"Your programs are now programs that program neural networks"</p>
        </div>
      </div>
    ),
  },
  {
    id: "llm-os",
    title: "LLMs as OS",
    subtitle: "A New Kind of Computer",
    icon: (
      <div className="w-8 h-8 bg-white flex items-center justify-center">
        <Cpu className="w-6 h-6 text-black" />
      </div>
    ),
    content: (
      <div className="space-y-8">
        <div className="bg-white rounded-lg p-6 border border-zinc-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-black">Traditional OS</h3>
              <ul className="space-y-2 text-sm text-black">
                <li>
                  <span className="font-mono">CPU</span> → Processing
                </li>
                <li>
                  <span className="font-mono">RAM</span> → Memory
                </li>
                <li>
                  <span className="font-mono">APIs</span> → System calls
                </li>
                <li>
                  <span className="font-mono">GUI</span> → User interface
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold bg-transparent text-black">LLM OS</h3>
              <ul className="space-y-2 text-sm text-black">
                <li>
                  <span className="font-mono">Transformer</span> → Processing
                </li>
                <li>
                  <span className="font-mono">Context Window</span> → Memory
                </li>
                <li>
                  <span className="font-mono">Prompts</span> → System calls
                </li>
                <li>
                  <span className="font-mono">Chat Interface</span> → Terminal
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-white">
            We're in the <span className="font-mono text-white">1960s era</span> of this new computing paradigm
          </p>
          <p className="text-sm text-zinc-500 mt-2">Expensive, centralized, time-shared access</p>
        </div>
      </div>
    ),
  },
  {
    id: "psychology",
    title: "LLM Psychology",
    subtitle: "Understanding the New Computer",
    icon: (
      <div className="w-8 h-8 bg-white flex items-center justify-center">
        <Brain className="w-6 h-6 text-black" />
      </div>
    ),
    content: (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-white flex items-center justify-center rounded">
                <Check className="w-4 h-4 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-white">Superpowers</h3>
            </div>
            <ul className="space-y-2 text-sm text-white">
              <li>• Vast knowledge and memory</li>
              <li>• Pattern recognition</li>
              <li>• Natural language understanding</li>
              <li>• Code generation</li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-white flex items-center justify-center rounded">
                <X className="w-4 h-4 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-white">Cognitive Deficits</h3>
            </div>
            <ul className="space-y-2 text-sm text-white">
              <li>• Hallucination</li>
              <li>• Jagged intelligence</li>
              <li>• No persistent memory</li>
              <li>• Security vulnerabilities</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-white italic">"Like Rain Man with superpowers and amnesia"</p>
        </div>
      </div>
    ),
  },
  {
    id: "autonomy",
    title: "Partial Autonomy",
    subtitle: "The Iron Man Suit Approach",
    icon: (
      <div className="w-8 h-8 bg-white flex items-center justify-center">
        <Settings className="w-6 h-6 text-black" />
      </div>
    ),
    content: (
      <div className="space-y-8">
        <div className="bg-white rounded-lg p-6 border border-zinc-700">
          <h3 className="text-lg font-semibold mb-4 text-black">Key Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm text-black">Context management</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm text-black">Multiple LLM orchestration</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm text-black">Application-specific UIs</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm text-black">Autonomy slider</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm text-black">Human-in-the-loop</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm text-black">Fast verification</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-white">
            Build <span className="font-mono text-white">augmentation</span>, not just{" "}
            <span className="font-mono text-white">automation</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "everyone-programmer",
    title: "Everyone is a Programmer",
    subtitle: "Natural Language as Code",
    icon: (
      <div className="w-8 h-8 bg-white flex items-center justify-center">
        <Users className="w-6 h-6 text-black" />
      </div>
    ),
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <p className="text-2xl text-white mb-4">"Suddenly, everyone is a programmer"</p>
          <p className="text-white">Because everyone speaks natural language</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-zinc-700">
          <h3 className="text-lg font-semibold mb-4 text-black">Vibe Coding</h3>
          <div className="space-y-4 text-sm text-black">
            <p>• Build custom solutions without traditional programming knowledge</p>
            <p>• Natural language instructions become executable code</p>
            <p>• Gateway drug to software development</p>
            <p>• Democratizes creation of digital tools</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-zinc-500 font-mono text-sm">The barrier to entry has never been lower</p>
        </div>
      </div>
    ),
  },
  {
    id: "building-agents",
    title: "Building for Agents",
    subtitle: "Infrastructure for AI Consumers",
    icon: (
      <div className="w-8 h-8 bg-white flex items-center justify-center">
        <Globe className="w-6 h-6 text-black" />
      </div>
    ),
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 border border-zinc-700">
            <h3 className="text-lg font-semibold mb-4 text-black">LLM-Friendly Formats</h3>
            <ul className="space-y-2 text-sm text-black">
              <li>
                <span className="font-mono">llms.txt</span> → Site descriptions
              </li>
              <li>
                <span className="font-mono">Markdown docs</span> → Easy parsing
              </li>
              <li>
                <span className="font-mono">Structured APIs</span> → Agent actions
              </li>
              <li>
                <span className="font-mono">Context protocols</span> → Direct communication
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 border border-zinc-700">
            <h3 className="text-lg font-semibold mb-4 text-black">New Consumer Type</h3>
            <ul className="space-y-2 text-sm text-black">
              <li>• Human-like but computational</li>
              <li>• Needs structured information</li>
              <li>• Can take programmatic actions</li>
              <li>• Requires clear instructions</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p className="text-white">
            We need to redesign our digital infrastructure for <span className="font-mono text-white">AI agents</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "opportunity",
    title: "The Opportunity",
    subtitle: "An Amazing Time to Enter Tech",
    icon: (
      <div className="w-8 h-8 bg-white flex items-center justify-center">
        <Zap className="w-6 h-6 text-black" />
      </div>
    ),
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <p className="text-2xl text-white mb-4">"What an amazing time to enter the industry"</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center space-y-3">
            <div className="flex justify-center bg-transparent">
              <RotateCcw className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-lg font-semibold">Rewrite Everything</h3>
            <p className="text-sm text-white">Massive opportunity to rebuild software for the AI era</p>
          </div>
          <div className="text-center space-y-3">
            <div className="flex justify-center bg-transparent">
              <Zap className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-lg font-semibold">New Paradigms</h3>
            <p className="text-sm text-white">Learn to work with fallible AI spirits effectively</p>
          </div>
          <div className="text-center space-y-3">
            <div className="flex justify-center bg-transparent">
              <Rocket className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-lg font-semibold">Build the Future</h3>
            <p className="text-sm text-white">Create the infrastructure for human-AI collaboration</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-zinc-500 font-mono text-sm">The autonomy slider goes from left to right →</p>
        </div>
      </div>
    ),
  },
  {
    id: "thank-you",
    title: "Thank You",
    subtitle: "",
    icon: (
      <div className="w-8 h-8 bg-white flex items-center justify-center">
        <Terminal className="w-6 h-6 text-black" />
      </div>
    ),
    content: (
      <div className="text-center space-y-8">
        <p className="text-white font-semibold text-3xl">
          Welcome to the era of <span className="text-white">Software 3.0</span>
        </p>
        <div className="space-y-4 text-white">
          <p>Build partial autonomy products</p>
          <p>Keep AI on a leash</p>
          <p>Design for both humans and agents</p>
        </div>
        <div className="pt-8">
          <p className="text-zinc-600 font-mono text-sm">— Based on Andrej Karpathy's YC Talk, 2024</p>
        </div>
      </div>
    ),
  },
]

export default function SlideDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1 && !isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1)
        setIsTransitioning(false)
      }, 150)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1)
        setIsTransitioning(false)
      }, 150)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault()
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        prevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [currentSlide, isTransitioning])

  // Touch/swipe navigation
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  // Prevent iOS back navigation on swipe
  useEffect(() => {
    const preventBackNavigation = (e: TouchEvent) => {
      // Only prevent if we're at the edges and trying to swipe
      if (e.touches.length !== 1) return

      const touch = e.touches[0]
      const startX = touch.clientX

      // Prevent back navigation when swiping from left edge
      if (startX < 20 && currentSlide > 0) {
        e.preventDefault()
      }
    }

    document.addEventListener("touchstart", preventBackNavigation, { passive: false })
    return () => document.removeEventListener("touchstart", preventBackNavigation)
  }, [currentSlide])

  const currentSlideData = slides[currentSlide]

  return (
    <div
      className="bg-black text-zinc-100 min-h-screen relative overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Navigation Controls */}
      <div className="fixed top-4 right-4 z-50 flex items-center space-x-2.5">
        <span className="text-zinc-400 font-mono text-xs">
          {currentSlide + 1} / {slides.length}
        </span>
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0 || isTransitioning}
          className="rounded-full bg-white hover:bg-zinc-200 text-black disabled:opacity-30 disabled:cursor-not-allowed transition-colors p-0.5"
        >
          <ChevronLeft className="size-3" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1 || isTransitioning}
          className="rounded-full bg-white hover:bg-zinc-200 text-black disabled:opacity-30 disabled:cursor-not-allowed transition-colors p-0.5"
        >
          <ChevronRight className="size-3" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-zinc-800 z-40">
        <div
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide Content */}
      <div className={`transition-opacity duration-300 ease-in-out ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
        <Slide title={currentSlideData.title} subtitle={currentSlideData.subtitle} icon={currentSlideData.icon}>
          {currentSlideData.content}
        </Slide>
      </div>

      {/* Navigation Hint */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 font-mono text-xs text-zinc-500 hidden md:block">
        Use ← → keys or buttons to navigate
      </div>
    </div>
  )
}
