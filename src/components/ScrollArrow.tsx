'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ScrollArrowProps {
  targetId: string
  backgroundColor: 'yellow' | 'green'
  className?: string
}

export function ScrollArrow({
  targetId,
  backgroundColor,
  className = '',
}: ScrollArrowProps) {
  const arrowColor = backgroundColor === 'yellow' ? '#2d7d32' : '#eec32f' // green for yellow bg, yellow for green bg

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`flex justify-center ${className}`}>
      <motion.button
        onClick={() => scrollToSection(targetId)}
        className="cursor-pointer"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
      >
        <motion.svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: arrowColor }}
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.button>
    </div>
  )
}
