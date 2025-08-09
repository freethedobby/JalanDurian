'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Award } from 'lucide-react'
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
              <Card className="h-full rounded-2xl border border-black/10 bg-black/5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/10 hover:shadow-xl">
                <CardHeader className="pb-4 text-center">
                  <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-emerald-700 to-emerald-800 shadow-lg">
                    <div className="text-2xl font-bold tracking-wider text-white">
                      {farmer.name
                        .split(' ')
                        .map((n) => n.charAt(0))
                        .join('')}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-black">
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
    </section>
  )
}
