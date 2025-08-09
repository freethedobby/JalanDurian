'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface KingOfKingWatermarkProps {
  className?: string
}

export function KingOfKingWatermark({
  className = '',
}: KingOfKingWatermarkProps) {
  return (
    <motion.div
      className={`pointer-events-none fixed inset-0 z-10 flex items-center justify-center overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
    >
      <motion.div
        className="select-none"
        style={{
          transform: 'rotate(-15deg)',
        }}
        initial={{ scale: 0.5, opacity: 0, rotate: -30 }}
        animate={{ scale: 1, opacity: 1, rotate: -15 }}
        transition={{
          duration: 1.5,
          delay: 1.2,
          ease: [0.175, 0.885, 0.32, 1.275],
        }}
      >
        <div className="relative">
          {/* 메인 텍스트 */}
          <h1
            className="whitespace-nowrap text-5xl font-black uppercase tracking-wider md:text-7xl lg:text-8xl xl:text-[10rem]"
            style={{
              WebkitTextStroke: '2px rgba(0, 0, 0, 0.05)',
              color: 'transparent',
              textShadow: '0 0 30px rgba(0, 0, 0, 0.03)',
              filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.1))',
            }}
          >
            KING OF KING
          </h1>

          {/* 서브 텍스트 */}
          <div className="absolute -bottom-3 right-0 md:-bottom-5 lg:-bottom-6 xl:-bottom-8">
            <p
              className="whitespace-nowrap text-base font-bold uppercase tracking-widest md:text-xl lg:text-2xl xl:text-3xl"
              style={{
                WebkitTextStroke: '1px rgba(0, 0, 0, 0.04)',
                color: 'transparent',
                textShadow: '0 0 15px rgba(0, 0, 0, 0.02)',
              }}
            >
              OF FRUIT
            </p>
          </div>

          {/* 미묘한 글로우 효과 */}
          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <h1
              className="whitespace-nowrap text-5xl font-black uppercase tracking-wider md:text-7xl lg:text-8xl xl:text-[10rem]"
              style={{
                WebkitTextStroke: '1px rgba(255, 215, 0, 0.1)',
                color: 'transparent',
                filter: 'blur(2px)',
              }}
            >
              KING OF KING
            </h1>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
