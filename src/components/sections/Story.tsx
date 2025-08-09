'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Award, X, Heart, Quote } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import {
  useInViewMotion,
  fadeInVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from '../../hooks/useInViewMotion'
import { SiteConfig } from '../../lib/types'

interface StoryProps {
  config: SiteConfig['story']
  badges: string[]
}

export function Story({ config, badges }: StoryProps) {
  const { ref, isInView } = useInViewMotion()
  const [selectedFarmer, setSelectedFarmer] = useState<string | null>(null)

  // 농장주별 가치관 데이터
  const farmerPhilosophies: Record<
    string,
    { quote: string; translation?: string; values: string[] }
  > = {
    'LEE&PARK 대표': {
      quote:
        '추천하지 않는 것, 내 입맛에 맞지 않는 것은 팔지 않습니다. Black Thorn D200에 헤어나올 수 없는 맛. 우리나라에서 감히 맛보기 힘든 맛을 고객분들께 선물해주고 싶습니다.',
      values: [
        '품질에 대한 타협 없는 철학',
        '고객에게 진정한 감동을 선사하는 것',
        '말레이시아 현지에서 10년간 쌓은 전문성',
      ],
    },
    '현지 농장 파트너': {
      quote:
        'Durian Black Thorn adalah warisan tiga generasi kami. Kami hanya menjual buah yang terbaik untuk keluarga sendiri.',
      translation:
        'Black Thorn 두리안은 우리 3대에 걸친 유산입니다. 우리는 우리 가족이 먹을 수 있는 최고의 과일만 판매합니다.',
      values: [
        '3대에 걸친 전통 농법',
        '자연과 조화로운 유기농 재배',
        '가족과 같은 마음으로 고객을 대하는 철학',
      ],
    },
  }

  return (
    <section
      id="story"
      className="section-padding"
      style={{ backgroundColor: '#eec32f' }}
      ref={ref}
    >
      <motion.div
        className="container-custom"
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div className="mb-16 text-center" variants={fadeInVariants}>
          <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl lg:text-5xl">
            OUR HERITAGE
          </h2>
          <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-gray-800 md:text-xl lg:text-2xl">
            30년간 말레이시아 최고급 두리안 농장을 운영하며 쌓아온 전문성과
            신뢰를 바탕으로, 진정한 프리미엄 품질만을 선별하여 한국에
            소개합니다.
          </p>
        </motion.div>

        {/* Farmers Section */}
        <motion.div
          className="mb-16 grid gap-8 md:grid-cols-2"
          variants={staggerContainerVariants}
        >
          {config.farmers.map((farmer) => (
            <motion.div key={farmer.name} variants={staggerItemVariants}>
              <Card
                className="group h-full cursor-pointer rounded-2xl border border-black/10 bg-black/5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/10 hover:shadow-xl"
                onClick={() => setSelectedFarmer(farmer.name)}
              >
                <CardHeader className="pb-4 text-center">
                  <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-emerald-700 to-emerald-800 shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <div className="text-2xl font-bold tracking-wider text-white">
                      {farmer.name
                        .split(' ')
                        .map((n) => n.charAt(0))
                        .join('')}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-black transition-colors duration-300 group-hover:text-emerald-800">
                    {farmer.name}
                  </CardTitle>
                  <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">
                    {farmer.role}
                  </p>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-center text-sm leading-relaxed text-gray-800">
                    {farmer.description}
                  </p>
                  <div className="mt-4 flex items-center justify-center">
                    <div className="flex items-center gap-1 text-xs text-emerald-600 opacity-60 transition-opacity duration-300 group-hover:opacity-100">
                      <Heart className="h-3 w-3" />
                      <span>가치관 보기</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Location & Certifications */}
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={staggerContainerVariants}
        >
          {/* Location */}
          <motion.div variants={staggerItemVariants}>
            <Card className="h-full border-black/20 bg-black/10 shadow-lg backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black">
                  <MapPin className="h-5 w-5 text-green-600" />
                  농장 위치
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-black">
                    {config.location.name}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {config.location.coordinates}
                  </p>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={config.location.mapImage}
                    alt={config.location.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={staggerItemVariants}>
            <Card className="h-full border-black/20 bg-black/10 shadow-lg backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black">
                  <Award className="h-5 w-5 text-green-600" />
                  인증 & 품질보증
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {badges.map((badge) => (
                    <div
                      key={badge}
                      className="flex items-center justify-center rounded-lg border border-green-600/30 bg-green-600/20 p-4"
                    >
                      <span className="font-semibold text-green-800">
                        {badge}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-800">
                    <strong>GAP (Good Agricultural Practice):</strong>{' '}
                    우수농산물관리인증
                  </p>
                  <p className="text-sm text-gray-800">
                    <strong>MPCA:</strong> 말레이시아 프리미엄 농산물 인증
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 농장주 가치관 모달 */}
      <AnimatePresence>
        {selectedFarmer && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFarmer(null)}
          >
            {/* 배경 오버레이 */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* 모달 컨텐츠 */}
            <motion.div
              className="relative max-h-[80vh] w-full max-w-2xl overflow-auto rounded-3xl border border-emerald-200 bg-gradient-to-br from-yellow-50 to-emerald-50 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* 헤더 */}
              <div className="flex items-center justify-between border-b border-emerald-200 p-6">
                <h3 className="text-2xl font-bold text-emerald-800">
                  {selectedFarmer}의 가치관
                </h3>
                <button
                  onClick={() => setSelectedFarmer(null)}
                  className="rounded-full p-2 transition-colors duration-200 hover:bg-emerald-100"
                >
                  <X className="h-5 w-5 text-emerald-600" />
                </button>
              </div>

              {/* 컨텐츠 */}
              <div className="space-y-6 p-6">
                {/* 인용구 */}
                <div className="relative">
                  <Quote className="absolute -left-2 -top-2 h-8 w-8 text-emerald-300" />
                  <blockquote className="rounded-2xl border border-emerald-100 bg-white/60 py-4 pl-6 pr-4">
                    <p className="text-lg font-medium italic leading-relaxed text-gray-800">
                      {farmerPhilosophies[selectedFarmer]?.quote}
                    </p>

                    {/* 말레이어 번역 */}
                    {farmerPhilosophies[selectedFarmer]?.translation && (
                      <div className="mt-4 border-t border-emerald-100 pt-4">
                        <p className="text-sm font-medium text-emerald-700">
                          한국어 번역:
                        </p>
                        <p className="mt-2 text-base leading-relaxed text-gray-700">
                          {farmerPhilosophies[selectedFarmer]?.translation}
                        </p>
                      </div>
                    )}
                  </blockquote>
                </div>

                {/* 핵심 가치 */}
                <div>
                  <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-emerald-800">
                    <Heart className="h-5 w-5 text-emerald-600" />
                    핵심 가치
                  </h4>
                  <div className="space-y-3">
                    {farmerPhilosophies[selectedFarmer]?.values.map(
                      (value, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-white/40 p-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500" />
                          <span className="font-medium text-gray-800">
                            {value}
                          </span>
                        </motion.div>
                      )
                    )}
                  </div>
                </div>

                {/* 클로징 메시지 */}
                <div className="rounded-2xl bg-gradient-to-r from-emerald-100 to-yellow-100 p-4 text-center">
                  <p className="text-sm font-medium text-emerald-700">
                    진정한 품질에 대한 열정으로 최고의 두리안을 선별합니다
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
