'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { ScrollArrow } from '../ScrollArrow'
import { scrollToSection } from '../../lib/utils'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center py-8 md:py-12"
      style={{ backgroundColor: '#eec32f' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/durian_farm.jpg"
          alt="Durian Farm"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.3),transparent)]" />
      </div>

      {/* Content */}
      <motion.div
        className="container relative z-10 mx-auto max-w-6xl px-4 py-4 text-center md:px-6 md:py-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Country Flags */}
        <motion.div
          className="mb-6 flex items-center justify-center gap-4 md:mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <motion.div
            className="flex items-center gap-3 md:gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="relative z-10 text-xl drop-shadow-lg md:text-2xl"
              initial={{ rotateY: -180 }}
              animate={{ rotateY: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.1 }}
            >
              🇲🇾
            </motion.span>

            <motion.div
              className="h-3 w-px bg-gradient-to-b from-transparent via-yellow-400/60 to-transparent md:h-4"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
            />

            <motion.span
              className="relative z-10 text-xl drop-shadow-lg md:text-2xl"
              initial={{ rotateY: 180 }}
              animate={{ rotateY: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.1 }}
            >
              🇰🇷
            </motion.span>
          </motion.div>
        </motion.div>

        {/* BLACKTHORN MALAYSIA 메인 헤딩 */}
        <motion.div className="mb-4 md:mb-6" variants={fadeInUp}>
          <motion.h1
            className="relative mb-3 text-4xl font-black md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.3,
            }}
          >
            {/* 메인 텍스트 */}
            <span className="relative z-10 bg-gradient-to-b from-black via-gray-800 to-black bg-clip-text text-transparent drop-shadow-2xl filter">
              BLACKTHORN D200
            </span>

            {/* 자연스러운 발광 효과 */}
            <motion.span
              className="absolute inset-0 -z-10 bg-gradient-to-r from-yellow-400/15 via-yellow-300/25 to-yellow-400/15 bg-clip-text text-transparent blur-md"
              animate={{
                opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
                scale: [1, 1.01, 1, 1.01, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              BLACKTHORN D200
            </motion.span>

            {/* 부드러운 그림자 */}
            <span className="absolute inset-0 -z-20 translate-x-0.5 translate-y-0.5 bg-gradient-to-b from-gray-600/20 to-gray-800/30 bg-clip-text text-transparent">
              BLACKTHORN D200
            </span>
          </motion.h1>

          {/* Made in Malaysia */}
          <motion.p
            className="mb-4 text-xs font-light uppercase tracking-widest text-gray-600 md:mb-6 md:text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            made in malaysia
          </motion.p>

          <motion.div
            className="space-y-1 md:space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.p
              className="text-base font-bold text-gray-800 md:text-lg lg:text-xl"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              말레이시아산 최고급 품종
            </motion.p>
            <motion.p
              className="text-sm font-black uppercase tracking-wide text-gray-900 md:text-base lg:text-lg"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              명실상부 KING OF KING OF FRUIT
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Black Thorn 특징 */}
        <motion.div
          className="mx-auto mb-4 grid max-w-4xl grid-cols-1 gap-3 md:mb-6 md:grid-cols-3 md:gap-4"
          variants={fadeInUp}
        >
          <div className="bg-black/3 rounded-xl border border-black/5 p-4 text-center transition-all duration-300 hover:bg-black/5 md:p-5">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-emerald-700 md:h-12 md:w-12">
              <div className="h-5 w-5 rounded-full border-2 border-white md:h-6 md:w-6"></div>
            </div>
            <h3 className="mb-2 text-sm font-bold text-black md:text-base">
              PREMIUM GRADE
            </h3>
            <p className="text-xs leading-relaxed text-gray-700 md:text-sm">
              당도 25° 이상의 최고급 등급
              <br />
              엄선된 프리미엄 품질
            </p>
          </div>
          <div className="bg-black/3 rounded-xl border border-black/5 p-4 text-center transition-all duration-300 hover:bg-black/5 md:p-5">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-emerald-700 md:h-12 md:w-12">
              <div className="h-5 w-5 animate-pulse rounded-full border-2 border-dashed border-white md:h-6 md:w-6"></div>
            </div>
            <h3 className="mb-2 text-sm font-bold text-black md:text-base">
              EXPRESS DELIVERY
            </h3>
            <p className="text-xs leading-relaxed text-gray-700 md:text-sm">
              수확 후 24시간 내 항공운송
              <br />
              최상의 신선도 보장
            </p>
          </div>
          <div className="bg-black/3 rounded-xl border border-black/5 p-4 text-center transition-all duration-300 hover:bg-black/5 md:p-5">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-emerald-700 md:h-12 md:w-12">
              <div className="h-5 w-5 rounded-sm border-2 border-white md:h-6 md:w-6"></div>
            </div>
            <h3 className="mb-2 text-sm font-bold text-black md:text-base">
              CERTIFIED QUALITY
            </h3>
            <p className="text-xs leading-relaxed text-gray-700 md:text-sm">
              GAP 인증 농장 직송
              <br />
              엄격한 품질 관리 시스템
            </p>
          </div>
        </motion.div>

        {/* 메인 CTA 버튼 */}
        <motion.div className="mb-4 md:mb-6" variants={fadeInUp}>
          <Button
            variant="default"
            size="lg"
            className="transform rounded-xl border border-emerald-500/20 bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-4 text-base font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-emerald-700 hover:to-emerald-800 md:px-12 md:py-6 md:text-lg"
            onClick={() => scrollToSection('countdown')}
          >
            RESERVE PREMIUM DURIAN
          </Button>
          <p className="mt-2 text-xs font-medium text-gray-600 md:text-sm">
            한정 수량 333개 • 예약 오픈 임박
          </p>
        </motion.div>

        {/* 스크롤 화살표 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.6 }}
        >
          <ScrollArrow targetId="countdown" backgroundColor="yellow" />
        </motion.div>
      </motion.div>
    </section>
  )
}
