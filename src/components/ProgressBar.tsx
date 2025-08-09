'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CountUpText } from './AnimatedText'
import { cn } from '../lib/utils'

interface ProgressBarProps {
  current: number
  total: number
  className?: string
  showLabel?: boolean
  animated?: boolean
}

export function ProgressBar({
  current,
  total,
  className,
  showLabel = true,
  animated = true,
}: ProgressBarProps) {
  const [progress, setProgress] = useState(0)
  const percentage = Math.min((current / total) * 100, 100)

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setProgress(percentage), 100)
      return () => clearTimeout(timer)
    } else {
      setProgress(percentage)
    }
  }, [percentage, animated])

  return (
    <div className={cn('w-full space-y-2', className)}>
      {showLabel && (
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>예약 진행률</span>
          <span>
            <CountUpText
              end={current}
              duration={1500}
              trigger={animated}
              suffix=""
            />{' '}
            / {total}
          </span>
        </div>
      )}
      <div className="relative h-3 w-full overflow-hidden rounded-full bg-secondary">
        {animated ? (
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
        ) : (
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        )}
        {progress > 80 && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-accent/20 to-transparent" />
        )}
      </div>
      {showLabel && (
        <p className="text-center text-xs text-muted-foreground">
          {progress < 50
            ? '아직 여유가 있습니다'
            : progress < 80
              ? '빠르게 예약이 진행되고 있습니다'
              : '마감이 임박했습니다!'}
        </p>
      )}
    </div>
  )
}
