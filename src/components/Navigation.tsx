'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { scrollToSection } from '../lib/utils'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/10 bg-black/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* 로고 */}
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <span className="text-2xl font-black text-white transition-colors duration-300 group-hover:text-yellow-300 md:text-3xl">
              #
            </span>
            <span className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-yellow-300 md:text-2xl">
              JALAN DURIAN
            </span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
