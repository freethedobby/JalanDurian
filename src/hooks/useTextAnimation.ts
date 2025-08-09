'use client'

import { useState, useEffect } from 'react'

export function useTypewriter(text: string, speed: number = 50, delay: number = 0) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, currentIndex === 0 ? delay : speed)

      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, text, speed, delay])

  const reset = () => {
    setDisplayText('')
    setCurrentIndex(0)
    setIsComplete(false)
  }

  return { displayText, isComplete, reset }
}

export function useCountUp(
  end: number,
  duration: number = 2000,
  start: number = 0,
  delay: number = 0
) {
  const [count, setCount] = useState(start)
  const [isAnimating, setIsAnimating] = useState(false)

  const startAnimation = () => {
    setIsAnimating(true)
    const startTime = Date.now() + delay
    const startValue = start

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime

      if (elapsed < 0) {
        requestAnimationFrame(animate)
        return
      }

      if (elapsed < duration) {
        const progress = elapsed / duration
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.round(startValue + (end - startValue) * easeOutQuart)
        setCount(currentCount)
        requestAnimationFrame(animate)
      } else {
        setCount(end)
        setIsAnimating(false)
      }
    }

    requestAnimationFrame(animate)
  }

  const reset = () => {
    setCount(start)
    setIsAnimating(false)
  }

  return { count, isAnimating, startAnimation, reset }
}

export function useFadeInLetters(text: string, delay: number = 50) {
  const [visibleLetters, setVisibleLetters] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const startAnimation = () => {
    setVisibleLetters(0)
    setIsComplete(false)
    
    const animate = (index: number) => {
      if (index <= text.length) {
        setTimeout(() => {
          setVisibleLetters(index)
          if (index === text.length) {
            setIsComplete(true)
          } else {
            animate(index + 1)
          }
        }, delay)
      }
    }

    animate(1)
  }

  const reset = () => {
    setVisibleLetters(0)
    setIsComplete(false)
  }

  return { visibleLetters, isComplete, startAnimation, reset }
} 