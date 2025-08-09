'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface KingOfKingWatermarkProps {
  className?: string
}

export function KingOfKingWatermark({
  className = '',
}: KingOfKingWatermarkProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)

  useEffect(() => {
    const sections = ['hero', 'countdown', 'story', 'tiers', 'faq']

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            const index = sections.indexOf(sectionId)
            if (index !== -1) {
              setCurrentSectionIndex(index)
            }
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px',
      }
    )

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const isRightSide = currentSectionIndex % 2 === 1
  const rotation = isRightSide ? 15 : -15

  return (
    <motion.div
      className={`pointer-events-none fixed inset-0 z-10 flex items-center overflow-hidden ${className}`}
      style={{
        justifyContent: isRightSide ? 'flex-end' : 'flex-start',
        paddingLeft: isRightSide ? '0' : '5%',
        paddingRight: isRightSide ? '5%' : '0',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
    >
      <motion.div
        className="select-none"
        initial={{ scale: 0.5, opacity: 0, rotate: rotation * 2 }}
        animate={{
          scale: 1,
          opacity: 1,
          rotate: rotation,
        }}
        transition={{
          duration: 1.5,
          delay: 1.2,
          ease: [0.175, 0.885, 0.32, 1.275],
        }}
        key={currentSectionIndex} // 섹션 변경 시 재애니메이션
      >
        <div className="relative">
          {/* 메인 텍스트 */}
          <h1
            className="whitespace-nowrap text-4xl font-black uppercase tracking-wider md:text-6xl lg:text-7xl xl:text-8xl"
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
          <div
            className={`absolute -bottom-2 ${isRightSide ? 'left-0' : 'right-0'} md:-bottom-4 lg:-bottom-5 xl:-bottom-6`}
          >
            <p
              className="whitespace-nowrap text-sm font-bold uppercase tracking-widest md:text-lg lg:text-xl xl:text-2xl"
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
              className="whitespace-nowrap text-4xl font-black uppercase tracking-wider md:text-6xl lg:text-7xl xl:text-8xl"
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
