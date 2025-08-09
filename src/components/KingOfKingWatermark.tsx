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

  return (
    <motion.div
      className={`pointer-events-none fixed inset-0 z-10 flex items-center overflow-hidden ${className}`}
      style={{
        justifyContent: isRightSide ? 'flex-end' : 'flex-start',
        paddingLeft: isRightSide ? '0' : '2%',
        paddingRight: isRightSide ? '2%' : '0',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
    >
      <motion.div
        className="select-none"
        style={{
          transform: 'rotate(-90deg)',
          transformOrigin: 'center',
        }}
        initial={{ scale: 0.5, opacity: 0, y: 50 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.5,
          delay: 1.2,
          ease: [0.175, 0.885, 0.32, 1.275],
        }}
        key={currentSectionIndex} // 섹션 변경 시 재애니메이션
      >
        <div className="relative flex items-center gap-4">
          {/* 메인 텍스트 */}
          <h1
            className="text-3xl font-black uppercase tracking-widest md:text-5xl lg:text-6xl xl:text-7xl"
            style={{
              WebkitTextStroke: '2px rgba(0, 0, 0, 0.05)',
              color: 'transparent',
              textShadow: '0 0 30px rgba(0, 0, 0, 0.03)',
              filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.1))',
            }}
          >
            #Jalan Durian
          </h1>

          {/* 서브 텍스트 */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest md:text-sm lg:text-base xl:text-lg"
              style={{
                WebkitTextStroke: '1px rgba(0, 0, 0, 0.04)',
                color: 'transparent',
                textShadow: '0 0 15px rgba(0, 0, 0, 0.02)',
              }}
            ></p>
          </div>

          {/* 미묘한 글로우 효과 */}
          <motion.div
            className="absolute inset-0 flex items-center gap-4"
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
              className="text-3xl font-black uppercase tracking-widest md:text-5xl lg:text-6xl xl:text-7xl"
              style={{
                WebkitTextStroke: '1px rgba(255, 215, 0, 0.1)',
                color: 'transparent',
                filter: 'blur(2px)',
              }}
            >
              #Jalan Durian
            </h1>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
