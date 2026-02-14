"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { Slide } from "./slide"
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const slides = [
  {
    id: "title",
    title: "Areculateir",
    subtitle: "Operations Walkthrough",
    icon: null,
    content: (
      <div className="space-y-8 text-center">
        <p className="text-white font-medium text-2xl">A systems-level method for building and shipping modern brands.</p>
        <div className="pt-8">
          <p className="text-zinc-400 font-mono text-sm">Research → Brand → Build → Automate → Optimize</p>
        </div>
      </div>
    ),
  },
  {
    id: "what-this-is",
    title: "What This Is",
    subtitle: "A practical operating system for execution",
    icon: null,
    content: (
      <div className="space-y-4 text-white">
        <p>• A repeatable process, not a one-off project</p>
        <p>• Designed for speed + quality under constraints</p>
        <p>• Each stage produces concrete deliverables</p>
        <p>• Every output feeds the next stage</p>
      </div>
    ),
  },
  {
    id: "suite-of-services",
    title: "The Suite",
    subtitle: "What we actually deliver",
    icon: null,
    content: (
      <div className="space-y-4 text-white">
        <p>• Product / Market Research</p>
        <p>• Brand Strategy + Visual Identity</p>
        <p>• Web Design + Development</p>
        <p>• Marketing + Ads creative systems</p>
        <p>• Agentic workflow implementation</p>
        <p>• Funnel Optimization + CRO + OKRs</p>
      </div>
    ),
  },
  {
    id: "product-market-research",
    title: "Product / Market Research",
    subtitle: "Clarity before creation",
    icon: null,
    content: (
      <div className="space-y-4 text-white">
        <p>• Define audience + pain + job-to-be-done</p>
        <p>• Competitor / category scan</p>
        <p>• Offer positioning + differentiators</p>
        <p>• Messaging pillars + proof inventory</p>
        <p>• Deliverable: research brief + offer map</p>
      </div>
    ),
  },
  {
    id: "branding",
    title: "Branding",
    subtitle: "Perception engineering",
    icon: null,
    content: (
      <div className="space-y-4 text-white">
        <p>• Identity system: type, color, layout rhythm</p>
        <p>• Authority cues: clarity, constraints, consistency</p>
        <p>• Narrative: story, voice, non-negotiables</p>
        <p>• Deliverable: brand kit + usage rules</p>
        <p>• Output must survive multiple channels</p>
      </div>
    ),
  },
  {
    id: "web-design-dev",
    title: "Web Design + Development",
    subtitle: "A conversion machine, not a brochure",
    icon: null,
    content: (
      <div className="space-y-4 text-white">
        <p>• High-end UI with minimal friction</p>
        <p>• Information architecture that guides action</p>
        <p>• Performance + responsiveness as baseline</p>
        <p>• Deployable system with iteration hooks</p>
        <p>• Deliverable: live site + reusable components</p>
      </div>
    ),
  },
  {
    id: "agentic-workflows",
    title: "Agentic Workflows",
    subtitle: "Self-improving operations",
    icon: null,
    content: (
      <div className="space-y-4 text-white">
        <p>• Automations that reduce manual drag</p>
        <p>• Lead capture → enrichment → follow-up</p>
        <p>• Proposal / onboarding / reporting pipelines</p>
        <p>• Human-in-the-loop where it matters</p>
        <p>• Deliverable: workflows + monitoring + SOP</p>
      </div>
    ),
  },
  {
    id: "optimization",
    title: "Optimization",
    subtitle: "Funnel, CRO, and feedback loops",
    icon: null,
    content: (
      <div className="space-y-4 text-white">
        <p>• Measure: inputs → actions → outcomes</p>
        <p>• Improve copy, UX, and CTAs systematically</p>
        <p>• Test messaging + offers, not vibes</p>
        <p>• OKRs that map to real behavior</p>
        <p>• Deliverable: optimization backlog + cadence</p>
      </div>
    ),
  },
  {
    id: "closing",
    title: "The Thesis",
    subtitle: undefined,
    icon: null,
    content: (
      <div className="text-center space-y-8">
        <p className="text-white text-xl">A modern brand is a programmable system:</p>
        <p className="text-zinc-400 font-mono text-sm">Research → Brand → Build → Automate → Optimize</p>
        <div className="pt-8">
          <p className="text-white font-semibold text-2xl">"Execution is a design discipline."</p>
        </div>
      </div>
    ),
  },
]

export default function SlideDeck() {
  const [isLoading, setIsLoading] = useState(true)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const beginFadeOut = useCallback(() => {
    if (isFadingOut) return
    setIsFadingOut(true)
    fadeTimerRef.current = setTimeout(() => {
      setIsLoading(false)
    }, 300)
  }, [isFadingOut])

  useEffect(() => {
    const safetyTimeout = setTimeout(() => {
      beginFadeOut()
    }, 2500)
    return () => {
      clearTimeout(safetyTimeout)
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current)
    }
  }, [beginFadeOut])

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
      {/* Brand Mark */}
      <div className="fixed top-6 left-6 z-50 opacity-80">
        <Image src="/brand/aasmark.png" alt="Areculateir" width={36} height={36} />
      </div>

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

      {/* Loading Overlay */}
      {isLoading && (
        <div
          className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-300 ${
            isFadingOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <video
            className="max-w-[520px] w-full"
            src="/brand/aaspinblack.mp4"
            autoPlay
            muted
            playsInline
            onEnded={beginFadeOut}
          />
        </div>
      )}
    </div>
  )
}
