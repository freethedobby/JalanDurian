'use client'

import { useState, useEffect } from 'react'
import { CountdownTime } from '../lib/types'

export function useCountdown(targetDate: string): CountdownTime {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  })

  useEffect(() => {
    const calculateTimeLeft = (): CountdownTime => {
      try {
        // 목표 날짜 파싱
        const target = new Date(targetDate)
        const now = new Date()
        
        // 유효한 날짜인지 확인
        if (isNaN(target.getTime())) {
          console.error('Invalid target date:', targetDate)
          return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            isExpired: true,
          }
        }
        
        // 밀리초 단위로 차이 계산
        const difference = target.getTime() - now.getTime()

        if (difference <= 0) {
          return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            isExpired: true,
          }
        }

        // 정확한 시간 계산
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        return {
          days: Math.max(0, days),
          hours: Math.max(0, hours),
          minutes: Math.max(0, minutes),
          seconds: Math.max(0, seconds),
          isExpired: false,
        }
      } catch (error) {
        console.error('Error calculating countdown:', error)
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        }
      }
    }

    // 초기 계산
    const initialTimeLeft = calculateTimeLeft()
    setTimeLeft(initialTimeLeft)

    // 1초마다 업데이트
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft()
      setTimeLeft(newTimeLeft)
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return timeLeft
} 