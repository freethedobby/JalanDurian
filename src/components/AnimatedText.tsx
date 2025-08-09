'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  useTypewriter,
  useCountUp,
  useFadeInLetters,
} from '../hooks/useTextAnimation'

interface TypewriterTextProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  showCursor?: boolean
  onComplete?: () => void
}

export function TypewriterText({
  text,
  speed = 50,
  delay = 0,
  className = '',
  showCursor = true,
  onComplete,
}: TypewriterTextProps) {
  const { displayText, isComplete } = useTypewriter(text, speed, delay)

  useEffect(() => {
    if (isComplete && onComplete) {
      onComplete()
    }
  }, [isComplete, onComplete])

  return (
    <span className={className}>
      {displayText}
      {showCursor && !isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="ml-1"
        >
          |
        </motion.span>
      )}
    </span>
  )
}

interface CountUpTextProps {
  end: number
  duration?: number
  start?: number
  delay?: number
  className?: string
  prefix?: string
  suffix?: string
  trigger?: boolean
}

export function CountUpText({
  end,
  duration = 2000,
  start = 0,
  delay = 0,
  className = '',
  prefix = '',
  suffix = '',
  trigger = true,
}: CountUpTextProps) {
  const { count, startAnimation } = useCountUp(end, duration, start, delay)

  useEffect(() => {
    if (trigger) {
      startAnimation()
    }
  }, [trigger, startAnimation])

  return (
    <span className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

interface FadeInLettersProps {
  text: string
  delay?: number
  className?: string
  trigger?: boolean
  stagger?: number
}

export function FadeInLetters({
  text,
  delay = 100,
  className = '',
  trigger = true,
  stagger = 50,
}: FadeInLettersProps) {
  const { visibleLetters, startAnimation } = useFadeInLetters(text, stagger)

  useEffect(() => {
    if (trigger) {
      setTimeout(() => {
        startAnimation()
      }, delay)
    }
  }, [trigger, delay, startAnimation])

  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: index < visibleLetters ? 1 : 0,
            y: index < visibleLetters ? 0 : 20,
          }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

interface GradientTextProps {
  text: string
  className?: string
  gradient?: string
}

export function GradientText({
  text,
  className = '',
  gradient = 'from-primary via-primary/80 to-primary',
}: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r bg-clip-text text-transparent ${gradient} ${className}`}
    >
      {text}
    </span>
  )
}

interface FloatingTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function FloatingText({
  children,
  className = '',
  delay = 0,
}: FloatingTextProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{ y: [-5, 5, -5] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
