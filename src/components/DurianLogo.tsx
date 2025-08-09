'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface DurianLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeClasses = {
  sm: 'text-lg md:text-2xl',
  md: 'text-2xl md:text-4xl',
  lg: 'text-3xl md:text-5xl lg:text-6xl',
  xl: 'text-4xl md:text-6xl lg:text-7xl xl:text-8xl',
}

// 두리안 아이콘 SVG 컴포넌트
const DurianIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* 두리안 메인 바디 */}
    <ellipse
      cx="50"
      cy="55"
      rx="35"
      ry="40"
      fill="url(#durianGradient)"
      stroke="#8B4513"
      strokeWidth="1.5"
    />

    {/* 두리안 가시들 */}
    <g fill="#8B4513" opacity="0.8">
      {/* 상단 가시들 */}
      <polygon points="50,15 48,25 52,25" />
      <polygon points="35,20 33,30 37,28" />
      <polygon points="65,20 67,28 63,30" />

      {/* 중간 가시들 */}
      <polygon points="25,40 23,48 29,46" />
      <polygon points="75,40 77,46 71,48" />
      <polygon points="20,60 18,68 24,66" />
      <polygon points="80,60 82,66 76,68" />

      {/* 하단 가시들 */}
      <polygon points="35,85 33,93 37,91" />
      <polygon points="65,85 67,91 63,93" />
      <polygon points="50,90 48,98 52,96" />
    </g>

    {/* 두리안 내부 질감 */}
    <ellipse
      cx="50"
      cy="55"
      rx="25"
      ry="30"
      fill="url(#durianInner)"
      opacity="0.6"
    />

    {/* 그라데이션 정의 */}
    <defs>
      <linearGradient id="durianGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F4D03F" />
        <stop offset="50%" stopColor="#F7DC6F" />
        <stop offset="100%" stopColor="#F1C40F" />
      </linearGradient>
      <radialGradient id="durianInner" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#FFF9E6" />
        <stop offset="100%" stopColor="#F4D03F" />
      </radialGradient>
    </defs>
  </svg>
)

// 두리안 잎사귀 장식
const DurianLeaf = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 80 Q35 20 80 20 Q60 50 20 80"
      fill="url(#leafGradient)"
      stroke="#2D5016"
      strokeWidth="2"
    />
    <path
      d="M25 70 Q40 30 70 25"
      stroke="#2D5016"
      strokeWidth="1"
      opacity="0.6"
    />
    <defs>
      <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#52C41A" />
        <stop offset="50%" stopColor="#389E0D" />
        <stop offset="100%" stopColor="#237804" />
      </linearGradient>
    </defs>
  </svg>
)

export function DurianLogo({ className = '', size = 'lg' }: DurianLogoProps) {
  return (
    <motion.div
      className={`flex flex-col items-center gap-2 md:flex-row md:gap-4 ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: 'spring' }}
    >
      {/* 왼쪽 장식 - 모바일에서는 숨김 */}
      <motion.div
        className="hidden items-center gap-2 md:flex"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <DurianLeaf className="h-6 w-6 lg:h-8 lg:w-8" />
        <motion.div
          className="h-8 w-1 rounded-full bg-gradient-to-b from-green-600 to-yellow-500 lg:h-12"
          initial={{ height: 0 }}
          animate={{ height: size === 'xl' ? 48 : 32 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        />
      </motion.div>

      {/* 메인 로고 */}
      <motion.div
        className="flex flex-col items-center gap-1 md:gap-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* 두리안 아이콘 */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <DurianIcon className="h-12 w-12 md:h-16 md:w-16" />
        </motion.div>

        {/* 회사명 */}
        <div className="text-center">
          <motion.h1
            className={`font-bold tracking-wider text-black ${sizeClasses[size]} leading-none`}
            style={{
              background:
                'linear-gradient(135deg, #8B4513 0%, #F1C40F 50%, #52C41A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            JALAN DURIAN
          </motion.h1>
          <motion.div
            className="mt-1 text-xs font-medium tracking-wide text-green-700 md:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            PREMIUM MALAYSIAN FRUIT
          </motion.div>
        </div>
      </motion.div>

      {/* 오른쪽 장식 - 모바일에서는 숨김 */}
      <motion.div
        className="hidden items-center gap-2 md:flex"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.div
          className="h-8 w-1 rounded-full bg-gradient-to-b from-yellow-500 to-green-600 lg:h-12"
          initial={{ height: 0 }}
          animate={{ height: size === 'xl' ? 48 : 32 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        />
        <DurianLeaf className="h-6 w-6 scale-x-[-1] lg:h-8 lg:w-8" />
      </motion.div>
    </motion.div>
  )
}

// 간단한 텍스트 로고 (네비게이션용)
export function DurianTextLogo({
  className = '',
  theme = 'dark',
}: {
  className?: string
  theme?: 'light' | 'dark'
}) {
  const textColor = theme === 'dark' ? 'text-white' : 'text-black'

  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      <DurianIcon className="h-8 w-8" />
      <span
        className={`text-xl font-bold tracking-wide ${textColor}`}
        style={{
          background:
            theme === 'dark'
              ? 'linear-gradient(135deg, #F1C40F 0%, #52C41A 50%, #F1C40F 100%)'
              : 'linear-gradient(135deg, #8B4513 0%, #F1C40F 50%, #52C41A 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        JALAN DURIAN
      </span>
    </motion.div>
  )
}
