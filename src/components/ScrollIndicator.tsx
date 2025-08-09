'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Users, DollarSign, HelpCircle } from 'lucide-react'

interface ScrollIndicatorProps {
  className?: string
}

export function ScrollIndicator({ className = '' }: ScrollIndicatorProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  const sections = [
    { id: 'hero', label: '홈', icon: Home },
    { id: 'story', label: '스토리', icon: Users },
    { id: 'tiers', label: '가격', icon: DollarSign },
    { id: 'faq', label: '질문', icon: HelpCircle },
  ]

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100

      setScrollProgress(Math.min(progress, 100))
      setIsVisible(scrollTop > 100)

      // Detect if user is actively scrolling
      setIsScrolling(true)
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 1500) // Hide buttons 1.5 seconds after scrolling stops

      // 현재 보이는 섹션 감지
      const sectionElements = sections.map((section) =>
        document.getElementById(section.id)
      )

      const currentSection = sectionElements.find((element) => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom > 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* 스크롤 진행도 바 */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />

      {/* 섹션 네비게이션 - 스크롤 중일 때만 표시 */}
      <AnimatePresence>
        {isVisible && isScrolling && (
          <motion.nav
            className={`fixed right-3 top-16 z-40 md:right-6 md:top-24 ${className}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            {/* 네비게이션 메뉴 */}
            <motion.div
              className="flex gap-2 rounded-xl border border-white/30 p-2 shadow-lg backdrop-blur-md md:gap-3 md:rounded-2xl md:p-3"
              style={{ backgroundColor: '#2d7d32' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {sections.map((section, index) => {
                const Icon = section.icon
                const isActive = activeSection === section.id

                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`group relative flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200 md:h-12 md:w-12 md:rounded-xl ${
                      isActive
                        ? 'bg-white text-emerald-700 shadow-lg'
                        : 'bg-emerald-600/80 text-white hover:bg-white hover:text-emerald-700'
                    }`}
                  >
                    <Icon className="h-4 w-4 md:h-5 md:w-5" />

                    {/* 툴팁 */}
                    <div className="pointer-events-none absolute -left-14 top-1/2 -translate-y-1/2 rounded-lg bg-black/80 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 md:-left-16">
                      {section.label}
                    </div>
                  </button>
                )
              })}
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
